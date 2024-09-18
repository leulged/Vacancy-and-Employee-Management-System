// services/permissionRoleService.js
const AppDataSource = require("../Config/database");
const PermissionRole = require("../Models/permissionRoleModel");

const assignPermissionToRole = async (permissionId, roleId) => {
    const permissionRoleRepository = AppDataSource.getRepository(PermissionRole);
    const newPermissionRole = permissionRoleRepository.create({ permission: { id: permissionId }, role: { id: roleId } });
    return await permissionRoleRepository.save(newPermissionRole);
};

const getAllPermissionsForRole = async (roleId) => {
    const permissionRoleRepository = AppDataSource.getRepository(PermissionRole);
    return await permissionRoleRepository.find({
        where: { role: { id: roleId } },
        relations: ["permission"],
    });
};


const removePermissionFromRole = async (permissionId, roleId) => {
    const permissionRoleRepository = AppDataSource.getRepository(PermissionRole);
    const permissionRole = await permissionRoleRepository.findOne({ where: { permission: { id: permissionId }, role: { id: roleId } } });
    if (!permissionRole) throw new Error("PermissionRole relation not found");
    return await permissionRoleRepository.remove(permissionRole);
};

module.exports = {
    assignPermissionToRole,
    getAllPermissionsForRole,
    removePermissionFromRole,
};
