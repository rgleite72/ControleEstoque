import { Router } from "express";
import stockMovementController from "../controllers/stockMovement.controller.js";
import { validate, validateStockId } from "../middleware/validation.middleware.js"
import { stockSchema } from "../schemas/stockMovement.schema.js"
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router()

router.use(authMiddleware)
router.get("/stock", stockMovementController.findStockAllController)
router.get("/stock/:id", validateStockId, stockMovementController.findStockProductByIdController)
router.post("/stock", validate(stockSchema), stockMovementController.insertInOutStockController)

export default router 

