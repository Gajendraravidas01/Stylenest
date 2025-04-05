import {Router} from 'express'
import { CreateUser, LoginUser } from '../controllers/auth.controller.js';

const router  = Router();

router.route("/register").post(CreateUser);
router.route("/login").post(LoginUser);

export default router;