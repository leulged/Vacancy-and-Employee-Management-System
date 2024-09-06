// controllers/permissionRoleController.js
const permissionRoleService = require("../Services/permissionRoleService");

const assignPermissionToRole = async (req, res) => {
    try {
        const { permissionId, roleId } = req.body;
        const permissionRole = await permissionRoleService.assignPermissionToRole(permissionId, roleId);
        res.status(201).json(permissionRole);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllPermissionsForRole = async (req, res) => {
    try {
        const roleId = req.params.roleId;
        const permissions = await permissionRoleService.getAllPermissionsForRole(roleId);
        res.status(200).json(permissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removePermissionFromRole = async (req, res) => {
    try {
        const { permissionId, roleId } = req.params;
        await permissionRoleService.removePermissionFromRole(permissionId, roleId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    assignPermissionToRole,
    getAllPermissionsForRole,
    removePermissionFromRole,
};
