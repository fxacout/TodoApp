import { Router } from 'express';
import LogonController from '../controller/logon.controller';
const router = Router();
const logonController = new LogonController();

router.get('/', logonController.post);


export default router;