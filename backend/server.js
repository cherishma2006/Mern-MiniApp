import exp from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import { EmployeeApp } from './APIs/EmployeeAPI.js';
import cors from "cors";

const app=exp();
/*app.use(
 cors({
    origin: ["http://localhost:5173"],
   }),
   );*/
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "mern-mini-app-wine.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
app.use(exp.json());
app.use("/EmployeeAPI", EmployeeApp);
//asign port
//const port=process.env.PORT ||4000
const startServer = async () => {
  try {
    // 3. Use mongoose.connect, NOT the function name connectDB
    //const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/Employee";
    const dbUrl = process.env.DB_URL;
    await mongoose.connect(dbUrl);
    console.log("DB server connected");

    // 4. Assign port once
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (err) {
    console.error("Error in DB connect:", err);
    process.exit(1); // Stop the process if DB fails
  }
};

startServer();

/*const connectDB = async () => {
  try {
    // Pulling DB_URL from your .env file
    const dbUrl = process.env.DB_URL; 
    
    await mongoose.connect(dbUrl);
    console.log("DB server connected");

    // Pulling PORT from your .env file, with a fallback
    const port = process.env.PORT || 3000; 
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (err) {
    console.error("Error in DB connect:", err);
    process.exit(1); // Exit if the database connection fails
  }
};*/
//connectDB();

//Error handling middleware
/*app.use((err, req, res, next) => {
  console.log("error is ",err)
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  //send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
});*/
app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).json({ 
    message: "error occurred", 
    error: err.message || "Server side error" 
  });
});
