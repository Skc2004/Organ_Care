import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;
const SECRET_KEY = 'Your_Very_Strong_Secret_Key_123!';

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'helloSKC808@',
  database: 'organ_care_db',
});

// Check database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1); // Exit the server if DB connection fails
  } else {
    console.log('✅ Successfully connected to the database.');
    connection.release();
  }
});

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Allow both
  methods: 'GET,POST',
}));
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Register route (without bcrypt, storing the password as-is)
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if email already exists
    const query = 'SELECT * FROM users WHERE Email = ?';
    const [existingUser] = await db.promise().query(query, [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Insert the new user into the database (store password as-is)
    const insertQuery = 'INSERT INTO users (Username, Email, PasswordHash, Role) VALUES (?, ?, ?, ?)';
    await db.promise().query(insertQuery, [name, email, password, role]);

    console.log(`✅ New user registered: ${email}`);

    res.status(201).json({ message: 'Registration successful. Please log in.' });
  } catch (err) {
    console.error('❌ Error during registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route (no hashing, assuming plain text password comparison)
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE Email = ?';
    const [rows] = await db.promise().query(query, [email]);

    if (rows.length === 0) {
      console.warn('⚠️ User not found:', email);
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];

    // Compare plain text password with the stored PasswordHash
    if (password !== user.PasswordHash) {
      console.warn('⚠️ Invalid password attempt for:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token with the UserID and Email
    const token = jwt.sign(
      { id: user.UserID, email: user.Email },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    console.log(`✅ User logged in successfully: ${email}`);

    // Return token, role, and userId in the response
    res.json({
      token,
      role: user.Role,
      userId: user.UserID,  // Add userId here
    });
  } catch (err) {
    console.error('❌ Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('✅ Server is running');
});

// Add Organ Donation
app.post('/api/donations', async (req, res) => {
  const { userId, organType, donationDate, bloodGroup, heightCm, consentGiven } = req.body;

  if (!userId || !organType || !donationDate || !bloodGroup || !heightCm) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const insertQuery = `
      INSERT INTO donor_donations (UserID, OrganType, DonationDate, BloodGroup, HeightCm, ConsentGiven, SubmissionDate)
      VALUES (?, ?, ?, ?, ?, ?, NOW())
    `;
    await db.promise().query(insertQuery, [userId, organType, donationDate, bloodGroup, heightCm, consentGiven ? 1 : 0]);
    console.log(`✅ New donation inserted for userID: ${userId}`);

    await matchOrgans(); // 🔥 call matching after donation added

    res.status(201).json({ message: "Donation added successfully" });
  } catch (error) {
    console.error('❌ Error adding donation:', error);
    res.status(500).json({ message: "Server error" });
  }
});


// Get Donation History by UserID
app.get('/api/donations/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const query = `
      SELECT DonationID, OrganType, DonationDate, BloodGroup, HeightCm
      FROM donor_donations
      WHERE UserID = ?
      ORDER BY DonationDate DESC
    `;
    const [rows] = await db.promise().query(query, [userId]);
    res.json(rows);
  } catch (error) {
    console.error('❌ Error fetching donation history:', error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add Recipient Request
app.post('/api/recipient_requests', async (req, res) => {
  const { userId, organType, bloodGroup, heightCm, requestDate, currentStatus } = req.body;

  if (!userId || !organType || !bloodGroup || !heightCm || !requestDate || !currentStatus) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const insertQuery = `
      INSERT INTO recipient_requests (UserID, OrganType, BloodGroup, HeightCm, RequestDate, CurrentStatus)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await db.promise().query(insertQuery, [userId, organType, bloodGroup, heightCm, requestDate, currentStatus]);
    console.log(`✅ New request added for userID: ${userId}`);

    await matchOrgans(); // 🔥 call matching after recipient request added

    res.status(201).json({ message: "Request added successfully" });
  } catch (error) {
    console.error('❌ Error adding recipient request:', error);
    res.status(500).json({ message: "Server error" });
  }
});


// Get Recipient Request History by UserID
app.get('/api/recipient_requests/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const query = `
      SELECT RequestID, UserID, OrganType, BloodGroup, HeightCm, RequestDate, CurrentStatus
      FROM recipient_requests
      WHERE UserID = ?
      ORDER BY RequestDate DESC
    `;
    const [rows] = await db.promise().query(query, [userId]);
    res.json(rows);
  } catch (error) {
    console.error('❌ Error fetching recipient request history:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🆕 Match Donors and Recipients Route (insert into Matches table)
// 🆕 Stronger match-organ logic (for Matches table)
app.post('/api/match-organs', async (req, res) => {
  try {
    // Find matches first
    const [matches] = await db.promise().query(`
      SELECT d.DonationID, r.RequestID
      FROM donor_donations d
      INNER JOIN recipient_requests r
        ON d.OrganType = r.OrganType
       AND d.BloodGroup = r.BloodGroup
       AND ABS(d.HeightCm - r.HeightCm) <= 5
      WHERE d.ConsentGiven = 1
        AND r.CurrentStatus = 'Pending'
    `);

    if (matches.length === 0) {
      return res.status(200).json({ message: 'No matches found.' });
    }

    // Insert matches
    const insertValues = matches.map(
      ({ DonationID, RequestID }) => [DonationID, RequestID]
    );

    await db.promise().query(
      `INSERT INTO Matches (DonationID, RequestID) VALUES ?`,
      [insertValues]
    );

    console.log(`✅ ${insertValues.length} Matches inserted.`);
    res.status(200).json({ message: `${insertValues.length} matches created.` });

  } catch (error) {
    console.error('❌ Error matching organs:', error);
    res.status(500).json({ message: 'Server error during matching.' });
  }
});

// Function to auto-match organs
async function matchOrgans() {
  try {
    const [matches] = await db.promise().query(`
      SELECT d.DonationID, r.RequestID
      FROM donor_donations d
      INNER JOIN recipient_requests r
        ON d.OrganType = r.OrganType
       AND d.BloodGroup = r.BloodGroup
       AND ABS(d.HeightCm - r.HeightCm) <= 5
      WHERE d.ConsentGiven = 1
        AND r.CurrentStatus = 'Pending'
        AND NOT EXISTS (
          SELECT 1
          FROM Matches m
          WHERE m.DonationID = d.DonationID
            AND m.RequestID = r.RequestID
        )
    `);

    if (matches.length > 0) {
      const insertValues = matches.map(({ DonationID, RequestID }) => [DonationID, RequestID]);
      await db.promise().query(
        `INSERT INTO Matches (DonationID, RequestID) VALUES ?`,
        [insertValues]
      );
      console.log(`✅ ${insertValues.length} Matches inserted automatically.`);
    } else {
      console.log('ℹ️ No new matches found at this time.');
    }
  } catch (error) {
    console.error('❌ Error during automatic matching:', error);
  }
}

// Get Matched Organ Transplantation Requests
app.get('/api/matched-transplant-requests', async (req, res) => {
  try {
    // Fetch matched organ transplant requests
    const query = `
      SELECT r.RequestID, r.OrganType, r.BloodGroup, r.HeightCm, r.RequestDate, u.Username
      FROM recipient_requests r
      INNER JOIN Matches m ON r.RequestID = m.RequestID
      INNER JOIN users u ON r.UserID = u.UserID
      WHERE r.CurrentStatus = 'Pending'
      ORDER BY r.RequestDate DESC
    `;
    const [rows] = await db.promise().query(query);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No matched transplant requests found' });
    }

    res.json(rows);
  } catch (error) {
    console.error('❌ Error fetching matched transplant requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Handle accepting an organ request and updating status
app.patch('/api/recipient_requests/:requestId/approve', async (req, res) => {
  const { requestId } = req.params;

  try {
    const updateQuery = `
      UPDATE recipient_requests
      SET CurrentStatus = 'Approved'
      WHERE RequestID = ? AND CurrentStatus = 'Pending' 
    `;
    const [result] = await db.promise().query(updateQuery, [requestId]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Request not found or already processed' });
    }

    console.log(`✅ Request ${requestId} approved.`);
    res.status(200).json({ message: 'Request approved.' });
  } catch (error) {
    console.error('❌ Error approving request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Handle rejecting an organ request and updating status
app.patch('/api/recipient_requests/:requestId/decline', async (req, res) => {
  const { requestId } = req.params;

  try {
    const updateQuery = `
      UPDATE recipient_requests
      SET CurrentStatus = 'Declined'
      WHERE RequestID = ? AND CurrentStatus = 'Pending' 
    `;
    const [result] = await db.promise().query(updateQuery, [requestId]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Request not found or already processed' });
    }

    console.log(`✅ Request ${requestId} declined.`);
    res.status(200).json({ message: 'Request declined.' });
  } catch (error) {
    console.error('❌ Error declining request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get Matched Transplant Requests (Pending)
app.get('/api/matched-transplant-requests', async (req, res) => {
  try {
    const query = `
      SELECT 
        rr.RequestID, 
        u.Username, 
        rr.OrganType, 
        rr.RequestDate
      FROM recipient_requests rr
      JOIN users u ON rr.UserID = u.UserID
      WHERE rr.CurrentStatus = 'Pending'
      ORDER BY rr.RequestDate ASC
    `;
    const [rows] = await db.promise().query(query);
    res.json(rows);
  } catch (error) {
    console.error('❌ Error fetching matched transplant requests:', error);
    res.status(500).json({ message: "Server error" });
  }
});

// Approve a recipient request
app.patch('/api/recipient_requests/:requestId/approve', async (req, res) => {
  const { requestId } = req.params;
  try {
    const updateQuery = `
      UPDATE recipient_requests
      SET CurrentStatus = 'Approved'
      WHERE RequestID = ?
    `;
    await db.promise().query(updateQuery, [requestId]);
    console.log(`✅ Request ${requestId} approved.`);
    res.status(200).json({ message: "Request approved successfully" });
  } catch (error) {
    console.error('❌ Error approving request:', error);
    res.status(500).json({ message: "Server error" });
  }
});

// Decline a recipient request
app.patch('/api/recipient_requests/:requestId/decline', async (req, res) => {
  const { requestId } = req.params;
  try {
    const updateQuery = `
      UPDATE recipient_requests
      SET CurrentStatus = 'Rejected'
      WHERE RequestID = ?
    `;
    await db.promise().query(updateQuery, [requestId]);
    console.log(`✅ Request ${requestId} declined.`);
    res.status(200).json({ message: "Request declined successfully" });
  } catch (error) {
    console.error('❌ Error declining request:', error);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch Matched Transplant Requests
app.get('/api/matched-transplant-requests', async (req, res) => {
  try {
    const query = `
      SELECT rr.RequestID, rr.OrganType, rr.RequestDate, u.Username
      FROM recipient_requests rr
      JOIN users u ON rr.UserID = u.UserID
      WHERE rr.CurrentStatus = 'pending'
      ORDER BY rr.RequestDate DESC
    `;
    const [rows] = await db.promise().query(query);
    res.json(rows);
  } catch (error) {
    console.error('❌ Error fetching matched transplant requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});