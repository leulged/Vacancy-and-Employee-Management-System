const jwt = require('jsonwebtoken');
const AppDataSource = require('../Config/database');
const User = require('../Models/User');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log('Token decoded:', decoded);

        if (!AppDataSource || !AppDataSource.isInitialized) {
            console.error('AppDataSource is either undefined or not initialized');
            return res.status(500).json({ message: 'Database not initialized' });
        }

        let user;
        try {
            // Fetch user and its role from the database
            user = await AppDataSource.getRepository(User).findOne({
                where: { id: decoded.userId },
                relations: ['role'],  // Make sure to load the role relation
            });
        } catch (dbError) {
            console.error('Database error:', dbError);
            return res.status(500).json({ message: 'Error fetching user or role', error: dbError.message || dbError });
        }

        if (!user) {
            console.error('User not found with ID:', decoded.userId);
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User fetched from database:', user);

        req.user = user; // Store the fetched user in request object
        next();
    } catch (err) {
        console.error('Token verification error:', err);
        return res.status(401).json({ message: 'Invalid token.', error: err.message || err });
    }
};

const authorizeRole = (requiredRole) => {
    return (req, res, next) => {
        console.log('User role from token:', req.user.role.name);
        console.log('Required role:', requiredRole);

        if (!req.user || !req.user.role) {
            return res.status(403).json({ message: 'Access Denied. No role information found.' });
        }

        // Check if the user's role matches the required role
        if (req.user.role.name !== requiredRole) {
            return res.status(403).json({ message: `Access Denied. Requires ${requiredRole} role.` });
        }

        next(); // Proceed if the user's role matches the required role
    };
};

module.exports = { verifyToken, authorizeRole };
