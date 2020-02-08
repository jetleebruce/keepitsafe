const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DataBase
connectDB();

//Init middleware
app.use(express.json({extended: false}))

app.get("/", (req, res) =>
  res.json({ msg: "Welcom to the contact keeper api" })
);

//Define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
