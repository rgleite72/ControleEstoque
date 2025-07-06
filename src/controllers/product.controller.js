import productService from "../services/product.service.js";

async function createProductController(req, res){
    const newProduct = req.body

    try{
        const productNew = await productService.createProductService(newProduct)
        res.status(201).send(productNew)

    } catch (e) {
        res.status(400).send(e.message)
    }
}

async function findProductAllController(req, res){

    try{
        const foundProduct = await productService.findProductAllService()
        res.status(200).send(foundProduct)

    } catch (e) {
        res.status(400).send(e.message)
    }

}

async function findProductByIdController(req, res){
    const idProduct = req.params.id

    try{
        const foundProduct = await productService.findProductByIdService(idProduct)
        res.status(200).send(foundProduct) 

    } catch (e) {
        res.status(400).send(e.message)

    }

}

async function updateProductController(req, res){
    const uptProduct = req.body
    const idProduct = req.params.id

    try{
        const productUpdate = await productService.updateProductService(uptProduct, idProduct)
        res.status(200).send(productUpdate)
    } catch (e) {
        res.status(400).send(e.message)
    }
    

}

async function deleteProductController(req, res){
    const idProduct = req.params.id
    try{
        const productDelete = await productService.deleteProductService(idProduct)
        res.status(200).send(productDelete)

    } catch (e) {
        res.status(400).send(e.message)
    }
}

export default {
    createProductController,
    findProductAllController,
    findProductByIdController,
    updateProductController,
    deleteProductController

}
