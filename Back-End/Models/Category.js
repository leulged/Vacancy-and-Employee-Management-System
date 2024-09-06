// Models/Category.js
const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Category',
    tableName: 'categories',
    columns: {
        id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        category_name: {
            type: 'varchar',
            nullable: false,
        },
    },
});
