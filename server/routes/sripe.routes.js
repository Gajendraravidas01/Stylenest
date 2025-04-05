import { Router } from "express";
import { Payment } from "../controllers/sripe.controller.js";

const router = Router();

router.route('/payment').post(Payment);

export default router;