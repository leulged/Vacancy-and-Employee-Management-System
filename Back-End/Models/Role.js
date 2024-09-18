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
    
});
