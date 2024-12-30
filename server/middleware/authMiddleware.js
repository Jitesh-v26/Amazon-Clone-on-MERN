const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    const token =  req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, JWT_sevret)
}