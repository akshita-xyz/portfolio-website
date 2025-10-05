const express = require("express");
const router = express.Router();
const cors = require("cors");

// server used for portfolio
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Basic health check endpoint
router.get("/health", (req, res) => {
  res.json({ status: "Portfolio server is running" });
});