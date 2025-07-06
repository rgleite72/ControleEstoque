import { z } from 'zod'

const productSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(5, "Nome deve possuir pelo menos 5 caracteres"),
    category: z.string().min(5, "Categoria deve possuir pelo menos 5 caracteres"),
    price: z.number().positive(),
    quantity_in_stock: z.number().positive()

})

const productIdSchema = z.object({
    id: z.number().id().positive("O Id deve ser um numero positivo")
})

export default {
    productSchema, productIdSchema

}