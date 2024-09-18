const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AppDataSource } = require('../Config/database');

const userService = require('../Services/userService'); // Destructure the function from userService


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Use the findUserByEmail function from userService
        const user = await userService.findUserByEmail(email);  
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Password comparison and JWT token generation logic
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Login failed. Incorrect password." });
        }

        const token = jwt.sign(
            { userId: user.id, roleId: user.role.id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '5h' } // Set the expiration as needed
        );

        return res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role.name,
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
