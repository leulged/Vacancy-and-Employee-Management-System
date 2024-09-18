const { AppDataSource } = require('../Config/database');
const Role = require('../Models/Role');
const roleService = require('../Services/roleService');

const createRole = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newRole = await roleService.createRole(name, description);
        return res.status(201).json(newRole);
    } catch (error) {
        console.error('Error creating role:', error); // Log the error
        return res.status(500).json({ message: 'Error creating role', error });
    }
};

// Update Role
const updateRole = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const updatedRole = await roleService.updateRole(id, name, description);
        if (!updatedRole) {
            return res.status(404).json({ message: 'Role not found' });
        }
        return res.status(200).json(updatedRole);
    } catch (error) {
        console.error('Error updating role:', error); // Log the error
        return res.status(500).json({ message: 'Error updating role', error });
    }
};

// Delete Role
const deleteRole = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRole = await roleService.deleteRole(id);
        if (!deletedRole) {
            return res.status(404).json({ message: 'Role not found' });
        }
        return res.status(204).send(); // Role successfully deleted, no content to return
    } catch (error) {
        console.error('Error deleting role:', error); // Log the error
        return res.status(500).json({ message: 'Error deleting role', error });
    }
};

// Get All Roles
const getRoles = async (req, res) => {
    try {
        const roles = await roleService.getAllRoles();
        if (!roles || roles.length === 0) {
            return res.status(404).json({ message: 'No roles found' });
        }
        return res.json(roles);
    } catch (error) {
        console.error('Error fetching roles:', error);
        return res.status(500).json({ message: 'Error fetching roles', error });
    }
};

module.exports = { createRole, updateRole, deleteRole, getRoles };
