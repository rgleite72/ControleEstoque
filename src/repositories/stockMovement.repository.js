import db from '../config/database.js'


db.run(` 
    CREATE TABLE IF NOT EXISTS stock_movements (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        type TEXT NOT NULL, -- 'in' ou 'out'
        quantity INTEGER NOT NULL,
        movement_date TEXT NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id)
    )`)


function insertInOutStockRepository(newStock){
    return new Promise((resolve, reject) => {
        const { productId, type, quantity, movement_date } = newStock
        db.run(`
            INSERT INTO stock_movements (product_id, type, quantity, movement_date)
            VALUES (?, ?, ?, ?)`,
        [productId, type, quantity, movement_date],
        function (err) {
            if(err) {
                reject(err)
            } else {
                resolve({id: this.lastID, ...newStock})
            }
        })
    })
}

function findStockAllRepository(){
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT * FROM stock_movements`,
        [],
        (err, rows) => {
            if(err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

function findStockProductByIdRepository(idProduct){
    return new Promise((resolve, reject) => {
        db.get(`
                SELECT * FROM stock_movements where id = ?
            `,
        [idProduct],
        (err, row) => {
            if(err) {
                reject(err)
            } else {
                resolve(row)
            }
        })
    })
}

export default {
    insertInOutStockRepository,
    findStockAllRepository,
    findStockProductByIdRepository
}

