import { Router } from 'express';
import { DeleteUser, GetAllUser, GetUser, GetUserStats, UpdateUser } from '../controllers/user.controller.js';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/verifyToken.js';


const router = Router();

router.route("/:id").put(verifyTokenAndAuthorization, UpdateUser);
router.route("/:id").delete(verifyTokenAndAuthorization, DeleteUser);
router.route("/find/:id").get(verifyTokenAndAdmin,GetUser);
router.route("/").get(verifyTokenAndAdmin,GetAllUser);
router.route("/stats").get(verifyTokenAndAdmin,GetUserStats);


export default router;