const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Application',
    tableName: 'applications',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        fullname: {
            type: 'varchar',
            nullable: false,
        },
        email: {
            type: "varchar",
            nullable: false

        },
        gender: {
            type: 'varchar',
            nullable: false,

        },
        resume_url: {
            type: 'varchar',
            nullable: false
        },
        phone_number: {
            type: 'varchar',
            nullable: false
        },
        education: {
            type: 'varchar',
            nullable: false
        },
        experience: {
            type: 'varchar',
            nullable: false
        },
        skills: {
            type: 'json',
            nullable: false
        },
        status: {
            type: 'enum',
            enum: ['accepted', 'rejected' , 'pending'],
            default: 'pending',
        },
        
    },
});
