const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Team',
    tableName: 'teams',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        team_name: {
            type: 'varchar',
            nullable: false
        }
    }
    
});
