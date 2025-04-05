import { Router } from "express";
import { CreateOrder, DeleteOrder, getAllOrder, getMonthlyIncome, getUserOrder, UpdateOrder } from "../controllers/order.controller.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";


const router = Router();

router.route("/").post(verifyToken, CreateOrder);
router.route("/:id").put(verifyTokenAndAdmin, UpdateOrder);
router.route("/:id").delete(verifyTokenAndAdmin, DeleteOrder);
router.route("/find:userId").get(verifyTokenAndAuthorization, getUserOrder);
router.route("/").get(verifyTokenAndAdmin, getAllOrder);
router.route("/income").get(verifyTokenAndAdmin,getMonthlyIncome);


export default router;