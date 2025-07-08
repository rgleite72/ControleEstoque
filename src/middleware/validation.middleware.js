
import { productIdSchema } from "../schemas/product.schema.js";
import { stockIdSchema } from "../schemas/stockMovement.schema.js"


const validate = (schema) => (req, res, next) => {
    try{
        schema.parse(req.body)
        next()
    } catch (e) {
        res.status(400).json({error : e.errors})
    }
}

const validadeProductId = (req, res, next) => {
    try{
        productIdSchema.parse({ id: +req.params.id})
        next()
    } catch(e) {
        res.status(400).json({error: e.errors})
    }
}

const validateStockId = (req, res, next) => {
    try{
        stockIdSchema.parse({ id: +req.params.id})
        next()
    } catch (e) {
        res.status(400).json({error: e.errors})
    }
}

export { validate, validadeProductId , validateStockId}