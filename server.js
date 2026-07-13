const express = require("express");
const cors = require("cors");
<<<<<<< HEAD

const app = express();
=======
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const mongoose=require("mongoose");
const dns=require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const MONGO_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

console.log("Backend CWD:", process.cwd());
console.log("Mongo URI:", MONGO_URI ? "✓ Loaded from .env" : "ERROR: MONGODB_URI not set in .env");
>>>>>>> 93e5cf8 (Re-add server.js with secure environment variable configuration)

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");


// Middleware
app.use(cors());
app.use(express.json());

app.use(loggerMiddleware);


// Routes

app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {
<<<<<<< HEAD

  res.send("Employee Management API Running");

});


app.listen(5000, () => {

  console.log("Server Running on Port 5000");

});
=======
  res.send("Employee Management API Running");
});

mongoose.connect(MONGO_URI, {
    dbName: "EMS",
  })
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("Mongo connected DB:", mongoose.connection.name);
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
>>>>>>> 93e5cf8 (Re-add server.js with secure environment variable configuration)
