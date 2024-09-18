const userService = require('../Services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email, password, full_name, roleId } = req.body;
        const user = await userService.createUser(username, email, password, full_name, roleId);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { username, email, password, full_name, roleId } = req.body;  // Ensure roleId is destructured from the request body
        const user = await userService.updateUser(req.params.id, username, email, password, full_name, roleId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserByEmail = async (req, res) => {
    const { email } = req.params;  // Assuming email is passed in the URL as a parameter

    try {
        const user = await userService.findUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return user details along with the role
        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
            full_name: user.full_name,
            role: user.role.name  // Returning the role name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,

};
