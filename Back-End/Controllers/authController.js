const { loginUser } = require('../Services/authService');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { token, user } = await loginUser(email, password);
        res.json({ token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = {
    login,
};
