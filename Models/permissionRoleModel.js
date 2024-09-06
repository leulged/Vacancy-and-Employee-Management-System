// models/permissionRoleModel.js
const { EntitySchema } = require("typeorm");

const PermissionRole = new EntitySchema({
    name: "PermissionRole",
    tableName: "permission_role",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid",
        },
    },
    relations: {
        permission: {
            type: "many-to-one",
            target: "Permission",
            joinColumn: { name: "permissionId", referencedColumnName: "id" },
        },
        role: {
            type: "many-to-one",
            target: "Role",
            joinColumn: { name: "roleId", referencedColumnName: "id" },
        },
    },
});

module.exports = PermissionRole;
