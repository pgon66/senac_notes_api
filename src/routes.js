import { Router } from "express";
import UserController from './app/controllers/UserController';

const routes = new Router();

/** * USER * **/
routes.get('/user/store', UserController.store);

export default routes;