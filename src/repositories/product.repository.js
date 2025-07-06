import db from '../config/database.js'


db.run(`
    CREATE TABLE IF NOT EXISTS products (  
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        quantity_in_stock INTEGER NOT NULL DEFAULT 0
    )`)


function createProductRepository(newProduct){
    return new Promise((resolve, reject) => {
        const {name, category, price, quantityInStock} = newProduct
        db.run(`
            INSERT INTO products (name, category, price, quantity_in_stock)
            VALUES (?, ?, ?, ?)`,
        [name, category, price, quantityInStock],
        function (err){
            if(err) {
                reject(err)
            } else
            {
                resolve({id: this.lastID, ...newProduct})
            }
        }
    )}
)}

function findProductByNameRepository(nameProduct){
    return new Promise((resolve, reject) => {
        db.get(`
            SELECT * FROM products WHERE name = ?`,
        [nameProduct],
        (err, row) => {
            if (err){
                reject(err)
            } else {
                resolve(row)
            }

        })
    })
}

function findProductAllRepository(){
    return new Promise ((resolve, reject) => {
        db.all(`SELECT * FROM products`,
            [],
            (err, rows) => {
                if(err){
                    reject(err)
                } else {
                    resolve(rows)
                }

            }
        )
    })
}

function findProductByIdRepository(idProduct){
    return new Promise((resolve, reject) => {
        db.get(`
            SELECT * FROM products WHERE ID = ?`,
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

function deleteProductRepository(idProduct){
    return new Promise((resolve, reject) => {
        db.run(`
            DELETE FROM produtcs WHERE ID = ?`,
            [idProduct],
            (err) => {
                if(err){
                    reject(err)
                } else {
                    resolve({message: 'Produto excluido com Sucesso', idProduct})
                }
        })
    })
}

function updateProductRepository(updProduct, idProduct){
    const fields = ["name", "category", "price", "quantityInStock"]
    const values = []
    let sQuery = 'UPDATE products SET' 

    fields.forEach((field) => {
        if((updProduct[field]) !== 'undefined'){
            sQuery += ` ${field} = ?,`
            values.push(updProduct[field])
        }

    })

    sQuery = sQuery.slice(0, -1)

    sQuery += ' WHERE ID = ?'
    values.push(idProduct)

    db.run(sQuery, 
        values,
        function(err) {
            if (err) {
                reject (err)
            } else {
                resolve({id: idProduct, ...updProduct})
            }
        }
    )

}

export default {
    createProductRepository,
    findProductByNameRepository,
    findProductAllRepository,
    findProductByIdRepository,
    deleteProductRepository,
    updateProductRepository
}

