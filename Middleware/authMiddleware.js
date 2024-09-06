// const jwt = require('jsonwebtoken');
// const {userService}=require('../Services/userService')
// const authMiddleware = async() => (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//         return res.status(401).json({ message: 'No token provided' });
//     }

//     const token = authHeader.split(' ')[1];
//     try {
//         const decoded = jwt.verify(token, 'your_jwt_secret');
//         // if (requiredRoleId && decoded.roleId !== requiredRoleId) {
//         //     return res.status(403).json({ message: 'Access denied' });
//         // }
//         console.log(decoded,"decooo")
//     //  let  user =   userService.getUserById(user)
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Invalid token' });
//     }
// };

// module.exports = authMiddleware;
