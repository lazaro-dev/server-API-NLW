import knex from 'knex';
import Knex from 'knex';
import path from 'path';

//migrations - controles de versão no banco

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;