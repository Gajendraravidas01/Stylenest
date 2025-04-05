import { Router } from "express";
import { CreateCart, DeleteCart, getAllCart, getUserCart, UpdateCart } from "../controllers/cart.controller.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";

const router = Router();

router.route("/").post(verifyToken, CreateCart);
router.route("/:id").put(verifyTokenAndAuthorization,UpdateCart);
router.route("/").delete(verifyTokenAndAuthorization,DeleteCart);
router.route("/find/userId").get(verifyTokenAndAuthorization,getUserCart);
router.route("/").get(verifyTokenAndAdmin,getAllCart);

export default router;