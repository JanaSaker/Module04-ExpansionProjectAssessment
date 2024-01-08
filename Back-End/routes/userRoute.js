import {
    register,
    login
} from '../controller/userController.js';
import { Router } from 'express';
import {verifyToken} from '../middelware/auth.js'

const router = Router();

router.post('/',register);
router.get('/user',login, verifyToken);

export default router;
