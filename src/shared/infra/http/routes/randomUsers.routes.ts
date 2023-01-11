import { Router } from 'express';

import { ListRandomUsersController } from '@modules/randomUsers/useCase/ListRandomUsersController';

const randomUsers = Router();

const listRandomUsersController = new ListRandomUsersController();

randomUsers.get('/', listRandomUsersController.handle);

export { randomUsers };
