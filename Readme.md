# 🫁 Organ Care Management System

This is a full-stack application built with **React** (frontend via Vite) and **Node.js + MySQL** (backend) to manage and track organ donors, recipients, and transplant procedures efficiently. It ensures transparency, real-time tracking, and accessibility of organ care data for stakeholders like hospitals, NGOs, and government bodies.

## ⚙️ Technologies Used

* **Frontend**: React + Vite
* **Backend**: Node.js + Express
* **Database**: MySQL
* **Authentication**: JWT (JSON Web Tokens)
* **CORS & API Communication**: Express Middleware

## 📁 Project Structure

```
client/
├── index.html              # Root HTML file
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
├── server.js               # Node.js backend API and DB integration
├── eslint.config.js        # ESLint configuration
├── node_modules/           # Installed dependencies
```

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* [MySQL](https://www.mysql.com/)

### 1️⃣ Clone & Install Dependencies

```bash
cd client
npm install
```

### 2️⃣ Setup MySQL Database

Create a MySQL database called `organ_care_db` and set up the necessary tables. Update your DB credentials in `server.js`:

```js
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your-password',
  database: 'organ_care_db',
});
```

### 3️⃣ Run Backend Server

```bash
node server.js
```

### 4️⃣ Run Frontend (Vite Dev Server)

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

## 📦 Available Scripts

* `npm run dev` – Start the frontend dev server
* `npm run build` – Build frontend for production
* `npm run preview` – Preview built app
* `npm run lint` – Lint the code using ESLint

## 🔐 Authentication

The backend uses **JWT tokens** to secure APIs. Replace `SECRET_KEY` in `server.js` with a secure key for production.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

