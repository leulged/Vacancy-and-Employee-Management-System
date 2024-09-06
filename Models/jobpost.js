const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'JobPost',
    tableName: 'job_posts',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        title: {
            type: 'varchar',
            nullable: false,
        },
        description: {
            type: 'text',
            nullable: false,
        },
        educational_level: {
            type: 'varchar',
            nullable: false,
        },
        experience: {
            type: 'varchar',
            nullable: false,
        },
        required_employee: {
            type: 'int',
            nullable: false,
        },
        gender: {
            type: 'varchar',
            nullable: false,
        },
        categoryId: {
            type: 'uuid',
            nullable: true,
        },
    },
    relations: {
        category: {
            type: 'many-to-one',
            target: 'Category',
            joinColumn: {
                name: 'categoryId'
            },
            nullable: true,
        },
    }
});
