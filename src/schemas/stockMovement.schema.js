import { z } from  'zod'

const stockSchema = z.object({
    id: z.number().int().positive(),
    ProductId : z.number().int().positive(),
    type: z.string(),
    quantity: z.number().int().positive(),
    movement_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "A data deve estar no formato YYYY-MM-DD")

})

const stockIdSchema = z.object({
    id: z.number().int().positive()
})

export default { stockSchema, stockIdSchema }

