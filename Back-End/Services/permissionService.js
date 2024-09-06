// services/permissionService.js
const AppDataSource = require("../Config/database"); // Database connection
const Permission = require("../Models/permissionModel");

const createPermission = async (permissionData) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    const newPermission = permissionRepository.create(permissionData);
    return await permissionRepository.save(newPermission);
};

const getAllPermissions = async () => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    return await permissionRepository.find();
};

const getPermissionById = async (id) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    return await permissionRepository.findOne({ where: { id } });
};

const updatePermission = async (id, updates) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    let permission = await permissionRepository.findOne({ where: { id } });
    if (!permission) throw new Error("Permission not found");
    Object.assign(permission, updates);
    return await permissionRepository.save(permission);
};

const deletePermission = async (id) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    const permission = await permissionRepository.findOne({ where: { id } });
    if (!permission) throw new Error("Permission not found");
    return await permissionRepository.remove(permission);
};

module.exports = {
    createPermission,
    getAllPermissions,
    getPermissionById,
    updatePermission,
    deletePermission,
};
