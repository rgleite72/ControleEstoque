import stockMovementService from "../services/stockMovement.service.js";

async function insertInOutStockController(req, res){
    const newStock = req.body
    try{
        const stockNew = await stockMovementService.insertInOutStockService(newStock)
        res.status(201).send(stockNew)

    } catch(e) {
        res.status(400).send(e.message)
    }

}

async function findStockAllController(req, res){
    try{
        const result = await stockMovementService.findStockAllService()
        res.status(200).send(result)
    } catch (e) {
        res.status(400).send(e.message)
    }

}

async function findStockProductByIdController(req, res){
    const idProduct = req.params.id

    try {
        const foundStock = await stockMovementService.findStockProductByIdService(idProduct)
        res.status(200).send(foundStock)

    } catch(e) {
        res.status(400).send(e.message)
    }

}

export default {
    insertInOutStockController,
    findStockAllController,
    findStockProductByIdController
}


