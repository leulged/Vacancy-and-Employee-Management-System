const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Role',
    tableName: 'roles',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        name: {
            type: 'varchar',
            nullable: false,
        },
        description: {
            type: 'text',
            nullable: true,
        },
    },
    relations: {
        users: {
            type: 'one-to-many',
            target: 'User',
            inverseSide: 'role' // This must match the property name in the User model
        }
    }
});
