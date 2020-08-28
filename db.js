let knex = require('knex');
 
module.exports = knex({
    client: 'mysql', // pg, mssql, etc
 
    connection: {
        database:    'license',
        host:        'localhost',
        password:    '',
        user:        'root',
        dateStrings: true
    }
});