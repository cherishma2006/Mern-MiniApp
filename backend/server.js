import exp from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import { EmployeeApp } from './APIs/EmployeeAPI.js';
import cors from "cors";

const app = exp();

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, Postman, or server-to-server)
      if (!origin) return callback(null, true);
      
      const allowedOrigins = [
        "http://localhost:5173",
        "https://mern-mini-app-wine.vercel.app" //  Fixed: Added https://
      ];

      // Check if origin matches allowed array OR ends with any Vercel deployment domain
      if (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);

app.use(exp.json());
app.use("/EmployeeAPI", EmployeeApp);

const startServer = async () => {
  try {
    const dbUrl = process.env.DB_URL;
    await mongoose.connect(dbUrl);
    console.log("DB server connected");

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (err) {
    console.error("Error in DB connect:", err);
    process.exit(1);
  }
};

startServer();

app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).json({ 
    message: "error occurred", 
    error: err.message || "Server side error" 
  });
});