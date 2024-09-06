// models/permissionModel.js
const { EntitySchema } = require("typeorm");

const Permission = new EntitySchema({
    name: "Permission",
    tableName: "permissions",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid",
        },
        action: {
            type: "varchar",
            length: 50,
        },
        resource: {
            type: "varchar",
            length: 50,
        },
        description: {
            type: "text",
            nullable: true,
        },
    },
});

module.exports = Permission;
