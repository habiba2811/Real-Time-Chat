import express from 'express';
import protectRoute from '../MiddleWare/protectRoute.js';
import { getUserForSidebar } from '../Controllers/userController.js';

const router = express.Router();

router.get('/', protectRoute, getUserForSidebar);

export default router;
