import db from '../config/database.js'

db.run(`CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
    )`)


function createUserRepository(newUser) {
    return new Promise((resolve, reject) => {
        const {name, email, password} = newUser
        db.run(`INSERT INTO users (name, email, password) values (?, ?, ?)`,
            [name, email, password],
            function (err) {
                if(err) {
                    reject (err)
                } else
                {
                    resolve({id: this.lastID, ...newUser})
                }
            })
        })
}

function findUserByEmailRepository(email){
    return new Promise((resolve, reject) => {
        db.get(`SELECT id, name, email, password FROM users WHERE email = ?`,
            [email],
            (err, row) => {
                if (err) {
                    reject(err)
                } else 
                {
                    resolve(row)
                }
            }
        )

    })
}

export default { createUserRepository, findUserByEmailRepository }