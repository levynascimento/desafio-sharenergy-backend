import { Router } from 'express';

import { ListCatController } from '@modules/randomHttpCat/useCase/ListCatController';

const cat = Router();

const listRandomUsersController = new ListCatController();

cat.get('/:code', listRandomUsersController.handle);

export { cat };
