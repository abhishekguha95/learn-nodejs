require("dotenv").config();
const express = require("express");
const logRoutes = require("./routes/logs");

const app = express();
app.use(express.json());
app.use("/logs", logRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
