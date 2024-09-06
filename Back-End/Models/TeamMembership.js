const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'TeamMembership',
    tableName: 'team_memberships',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
    },
    relations: {
        team: {
            target: 'Team',
            type: 'many-to-one',
            joinColumn: true,
        },
        user: {
            target: 'User',
            type: 'many-to-one',
            joinColumn: true
        }
        
    }
});
