import { Router } from 'express';
import MessageController from './app/controllers/MessageController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/api/v1/message', MessageController.store);

export default routes;
