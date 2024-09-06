const { EntitySchema } = require('typeorm');

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
            nullable: true,
        },
        email: {
            type: 'varchar',
            nullable: false,
            unique: true,
        },
        password: {
            type: 'varchar',
            nullable: false,
        },
        full_name: {
            type: 'varchar',
            nullable: false,
        },
    },
    relations: {
        role: {
            type: 'many-to-one',
            target: 'Role',
            default: 'member',
            joinColumn: {
                name: 'roleId'
            }
        }
    }
});
