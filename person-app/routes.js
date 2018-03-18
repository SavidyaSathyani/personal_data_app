'use strict'

import Router from 'express';
import HomeController from './controllers/home.controller';
import PersonController from './controllers/person.controller';

const routes = new Router();

routes.get('/', HomeController.index);
routes.get('/person', PersonController.getRandom);

export default routes;