const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");

const connectDb = require('./config/db');
connectDb();

/**Routes */
app.use((re, res, next) => {
    console.log('request received on server.', req.body, req.url);
    next();
});

ap

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
})