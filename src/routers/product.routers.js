import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { validate, validadeProductId } from "../middleware/validation..middleware.js"
import { productSchema } from "../schemas/product.schema.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = Router()

router.use(authMiddleware)
router.get("/products", productController.findProductAllController)
router.get("/products/:id", validadeProductId, productController.findProductByIdController)
router.post("/products", validate(productSchema), productController.createProductController)
router.patch("/products/:id", validadeProductId, productController.updateProductController)
router.delete("products/:id", validadeProductId, productController.deleteProductController)


export default router
