# Organ Care

Organ Care is a web-based application designed to streamline the process of organ donation and transplantation. It facilitates seamless communication between donors, recipients, and healthcare professionals, ensuring efficient and transparent organ allocation.

## 🚀 Features

* **User Registration & Authentication**: Secure sign-up and login functionalities for donors, recipients, and medical staff.
* **Organ Listing**: Donors can list available organs with pertinent details.
* **Organ Request**: Recipients can request specific organs, providing necessary medical information.
* **Matching System**: An algorithm to match donors and recipients based on compatibility criteria.
* **Real-time Notifications**: Alerts for users about matching organs, status updates, and messages.
* **Admin Dashboard**: For healthcare professionals to monitor and manage organ transplants.

## 🛠️ Technologies Used

* **Frontend**: React.js, HTML5, CSS3
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JWT (JSON Web Tokens)
* **APIs**: RESTful APIs for client-server communication

## 📁 Project Structure

```
Organ_Care/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       ├── services/       # API calls
│       └── App.js          # Main application file
├── server/                 # Express backend
│   ├── controllers/        # Route handlers
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   └── server.js           # Entry point
├── .env                    # Environment variables
├── package.json            # Project metadata
└── README.md               # Project documentation
```

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Skc2004/Organ_Care.git
   cd Organ_Care
   ```

2. **Set up the backend**:

   ```bash
   cd server
   npm install
   ```

3. **Set up the frontend**:

   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**:

   Create a `.env` file in the `server` directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the application**:

   * **Backend**:

     ```bash
     cd ../server
     npm start
     ```

   * **Frontend**:

     ```bash
     cd ../client
     npm start
     ```

   The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## 🧪 Testing

To run tests, ensure both the frontend and backend are set up correctly. Then, use the following commands:

* **Backend Tests**:

  ```bash
  cd server
  npm test
  ```

* **Frontend Tests**:

  ```bash
  cd client
  npm test
  ```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

For any inquiries or feedback, please contact [Skc2004](https://github.com/Skc2004).

