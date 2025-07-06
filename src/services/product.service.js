import productRepository from "../repositories/product.repository";

async function createProductService(newProduct){
    const foundProduct = await productRepository.findProductByNameRepository(newProduct.name)
    if(foundProduct) throw new Error('Produto já cadastrado')

    const result = await productRepository.createProductRepository(newProduct)
    return result
}


async function findProductAllService(){
    const foundProduct = await productRepository.findProductAllRepository()
    return foundProduct

}

async function findProductByIdService(idProduct){
    const foundProduct = await productRepository.findProductByIdRepository(idProduct)
    return foundProduct

}

async function updateProductService(updProduct, idProduct){
    const result = productRepository.updateProductRepository(updProduct, idProduct)
    return result

}


async function deleteProductService(idProduct){
    const delProduct = await productRepository.deleteProductRepository(idProduct)
    return delProduct

}

export default {
    createProductService,
    findProductAllService,
    findProductByIdService,
    updateProductService,
    deleteProductService
}
