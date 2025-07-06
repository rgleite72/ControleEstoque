import sqlite3 from 'sqlite3'

import path from 'path'

const dbPath = path.resolve('database', 'stock_db.sqlite' )

const db = new sqlite3.Database(dbPath, (err) => {
    if(err) {
        console.log('Error ao conectar ao Banco de dados', err.message)
    } else {
        console.log('Conectado ao banco de dados')
    }

})

export default db

