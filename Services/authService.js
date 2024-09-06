const AppDataSource = require('../Config/database');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRepository = AppDataSource.getRepository(User);

const loginUser = async (email, password) => {
    const user = await userRepository.findOneBy({ email });

    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign(
        { userId: user.id, roleId: user.roleId }, // Ensure roleId is included in the token
        'your_jwt_secret', // Replace with your JWT secret
        { expiresIn: '1h' }
    );

    return { token, user };
};

module.exports = {
    loginUser,
};
