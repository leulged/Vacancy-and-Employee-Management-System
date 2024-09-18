const { EntitySchema } = require('typeorm');
const Role = require('./Role');

module.exports = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        username: {
            type: 'varchar',
        },
        email: {
            type: 'varchar',
            unique: true,
        },
        password: {
            type: 'varchar',
        },
        full_name: {
            type: 'varchar',
        },
    },
    relations: {
        role: {
            target: 'Role',
            type: 'many-to-one',
            joinColumn: { name: 'roleId' }, // Foreign key column in User table
            eager: true, // Load role automatically with user
        },
    },
});
