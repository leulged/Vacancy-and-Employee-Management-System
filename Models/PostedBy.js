const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'PostedBy',
    tableName: 'posted_by',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
    },
    relations: {
        job: {
            type: 'many-to-one',
            target: 'JobPost',
            joinColumn: {
                name: 'jobId',
            },
            nullable: false,
        },
        team: {
            type: 'many-to-one',
            target: 'Team',
            joinColumn: {
                name: 'teamId',
            },
            nullable: false,
        },
        applicant: {
            type: 'many-to-one',
            target: 'Application',
            joinColumn: {
                name: 'applicantId',
            },
            nullable: false,
        },
    },
});
