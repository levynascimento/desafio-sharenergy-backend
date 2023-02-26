import { Router } from 'express';

import { ListCatController } from '@modules/randomHttpCat/useCase/ListCatController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const cat = Router();

const listRandomUsersController = new ListCatController();

cat.get('/:code', ensureAuthenticated, listRandomUsersController.handle);

export { cat };
