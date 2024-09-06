// controllers/roleController.js
const roleService = require('../Services/roleService');

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleService.getAllRoles();
        res.json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve roles' });
    }
};

const getRoleById = async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        if (role) {
            res.json(role);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve role' });
    }
};

const createRole = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newRole = await roleService.createRole(name, description);
        res.status(201).json(newRole);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create role' });
    }
};

const updateRole = async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedRole = await roleService.updateRole(req.params.id, name, description);
        if (updatedRole) {
            res.json(updatedRole);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update role' });
    }
};

const deleteRole = async (req, res) => {
    try {
        const deletedRole = await roleService.deleteRole(req.params.id);
        if (deletedRole) {
            res.json(deletedRole);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete role' });
    }
};

module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole,
};
