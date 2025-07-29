# Office Presence Backend

This is the backend service for the **Office Presence App**, a simple internal tool to track team members' presence in the office on a weekly basis.

## 🛠 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment management

---

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/pritams19/office-presence-backend.git
cd office-presence-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup `.env` File

Create a `.env` file in the root with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/office-presence
JWT_SECRET=your_super_secret_key
```

### 4. Start the Server

```bash
npm run dev
```

---

## ✅ Features

- User Signup and Login with JWT
- Role-less access (only login-protected routes)
- Mark presence by date and period (all day, morning, afternoon)
- Fetch presence for specific date, date range, or user
- Delete presence entry
- Secure password handling via hashing

---

## 📘 API Endpoints

### Auth
- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/login` — Login and get JWT token

### Users
- `POST /api/users` — Create a new user (public route, hashed password)
- `GET /api/users/id` — Get user details by Id (protected)
- `GET /api/users?email=` — Get user details by email (protected)

### Presence
- `POST /api/presence` — Mark presence (protected)
- `DELETE /api/presence/:id` — Delete a presence entry (protected)
- `GET /api/presence/date/:date` — Get all users for a specific date (protected)
- `GET /api/presence/range?start=YYYY-MM-DD&end=YYYY-MM-DD` — Get user's presence between date range (protected)

---

## 🧪 Testing

Use Postman or Thunder Client to test the endpoints. Token-based routes require a `Bearer` token in the `Authorization` header. Use the `/api/auth/login` endpoint to get your token.

---

## 📌 Notes

- Public signup can be disabled later for security
- In the future, support for roles, password reset, and UI-based admin panel can be added
- Current protection logic allows POST `/api/users` without auth for initial onboarding

---

## 📂 Folder Structure

```
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── app.js
├── db.js
└── .env.example
```

---

## 👥 Maintainers

- [Pritam Deb](https://github.com/pritams19)