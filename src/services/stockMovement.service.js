import stockMovementRepository from "../repositories/stockMovement.repository.js";



async function insertInOutStockService(newStock){
    const result = await stockMovementRepository.insertInOutStockRepository(newStock)
    return result

}

async function findStockAllService(){
    const result = await stockMovementRepository.findStockAllRepository()
    return result
}

async function findStockProductByIdService(idProduct){
    const result = await stockMovementRepository.findStockProductByIdRepository(idProduct)
    return result
}

export default {
    insertInOutStockService, 
    findStockAllService,
    findStockProductByIdService
}