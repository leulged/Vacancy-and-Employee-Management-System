// controllers/permissionController.js
const permissionService = require("../Services/permissionService");

const createPermission = async (req, res) => {
    try {
        const permission = await permissionService.createPermission(req.body);
        res.status(201).json(permission);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllPermissions = async (req, res) => {
    try {
        const permissions = await permissionService.getAllPermissions();
        res.status(200).json(permissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPermissionById = async (req, res) => {
    try {
        const permission = await permissionService.getPermissionById(req.params.id);
        if (!permission) return res.status(404).json({ message: "Permission not found" });
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePermission = async (req, res) => {
    try {
        const permission = await permissionService.updatePermission(req.params.id, req.body);
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePermission = async (req, res) => {
    try {
        await permissionService.deletePermission(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPermission,
    getAllPermissions,
    getPermissionById,
    updatePermission,
    deletePermission,
};
