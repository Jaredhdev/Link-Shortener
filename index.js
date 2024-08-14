const express = require("express");
require("dotenv").config();
const { connectDb } = require("./config/database");
const userRouter = require("./routes/user.Routes");

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
    res.send('Hello World!');
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

