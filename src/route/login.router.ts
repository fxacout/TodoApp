import { Router } from 'express';
import LoginController from '../controller/login.controller';
const router = Router();
const loginController = new LoginController();
router.get('/', loginController.get);


export default router;