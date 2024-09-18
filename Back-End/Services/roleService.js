// services/roleService.js
const AppDataSource = require('../Config/database');
const Role = require('../Models/Role'); // Adjust the path if necessary

const roleRepository = AppDataSource.getRepository(Role);

const createRole = async (name, description) => {
    const newRole = roleRepository.create({ name, description });
    return await roleRepository.save(newRole);
};

const getAllRoles = async () => {
    return await roleRepository.find();
};


const updateRole = async (id, name, description) => {
    const role = await roleRepository.findOneBy({ id });
    if (role) {
        role.name = name;
        role.description = description;
        return await roleRepository.save(role);
    }
    return null;
};

const deleteRole = async (id) => {
    const role = await roleRepository.findOneBy({ id });
    if (role) {
        await roleRepository.remove(role);
        return role;
    }
    return null;
};

module.exports = {
    createRole,
    getAllRoles,
    
    updateRole,
    deleteRole,
};
