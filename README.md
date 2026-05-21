# Mern-MiniApp
# Employee Management System (MERN Stack)

A lightweight, full-stack Employee Management Application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create, view, edit, and delete employee records through a dynamic web interface.

## Live Links
* **Frontend (Vercel): https://mern-mini-app-wine.vercel.app
* **Backend API (Render): https://mern-miniapp-1.onrender.com

---

##  Tech Stack
* **Frontend:** React, Vite, React Router, React Hook Form, Axios, Tailwind CSS
* **Backend:** Node.js, Express.js, Mongoose
* **Database:** MongoDB Atlas (Cloud)
* **Hosting:** Vercel (Frontend) & Render (Backend)

---

##  Project Structure
```text
Mern-MiniApp/
├── backend/            # Express Server & API Business Logic
│   ├── APIs/           # Express Routers (EmployeeAPI.js)
│   ├── models/         # Mongoose Schemas & Database Models
│   ├── app.js          # Entry Server Configuration & CORS Setup
│   └── package.json
└── frontend/           # React Frontend Application (Vite)
    ├── src/
    │   ├── components/ # CreateEmp, EditEmployee, ListOfEmps Components
    │   ├── App.jsx     # App Routing Configuration
    │   └── main.jsx
    └── package.json
