import { Router } from 'express';

import { ListRandomUsersController } from '@modules/randomUsers/useCase/ListRandomUsersController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const randomUsers = Router();

const listRandomUsersController = new ListRandomUsersController();

randomUsers.get('/', ensureAuthenticated, listRandomUsersController.handle);

export { randomUsers };
