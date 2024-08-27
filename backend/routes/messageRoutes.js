import express from 'express';
import { sendMessage, getMessages } from '../Controllers/messageController.js';

import protectRoute from '../MiddleWare/protectRoute.js';
const router = express.Router();

router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;
