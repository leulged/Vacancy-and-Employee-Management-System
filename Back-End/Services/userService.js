const bcrypt = require('bcrypt');

const AppDataSource = require('../Config/database');
const User = require('../Models/User');
const Role = require('../Models/Role');

const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);

const createUser = async (username, email, password, full_name, roleId) => {
    // Fetch the role entity based on the roleId
    const role = await roleRepository.findOneBy({ id: roleId });

    if (!role) {
        throw new Error('Invalid role ID provided.');
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user entity and assign the role entity to it
    const user = userRepository.create({
        username,
        email,
        password: hashedPassword, // Store the hashed password
        full_name,
        role: role,
    });

    // Save the user entity
    await userRepository.save(user);
    return user;
};

const getAllUsers = async () => {
    return await userRepository.find({
        relations: ['role'], // Load the role relation
    });
};

const getUserById = async (id) => {
    return await userRepository.findOne({
        where: { id },
        relations: ['role'], // Load the role relation
    });
};

const updateUser = async (id, username, email, password, fullName, roleId) => {
    // Fetch the user by ID
    const user = await userRepository.findOne({
        where: { id },
        relations: ['role'],
    });

    if (!user) {
        throw new Error('User not found');
    }

    // Update user properties
    if (username) user.username = username;
    if (email) user.email = email;

    if (password) {
        // Hash the password before updating
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
    }

    if (fullName) user.full_name = fullName;

    // If a roleId is provided, fetch the role and assign it to the user
    if (roleId) {
        const role = await roleRepository.findOneBy({ id: roleId });
        if (!role) {
            throw new Error('Invalid role ID provided.');
        }
        user.role = role;
    }

    // Save the updated user entity
    await userRepository.save(user);

    return user;
};

const deleteUser = async (id) => {
    const user = await userRepository.findOneBy({ id });
    if (user) {
        await userRepository.remove(user);
        return user;
    }
    return null;
};
const findUserByEmail = async (email) => {
    return await userRepository.findOne({
        where: { email },
        relations: ['role'],  // Make sure to load related role
    });
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    findUserByEmail
};
