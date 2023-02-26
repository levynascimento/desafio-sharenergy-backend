import { Router } from 'express';

import { ListRandomDogController } from '@modules/randomDogs/useCase/ListRandomDogController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const randomDog = Router();

const listRandomUsersController = new ListRandomDogController();

randomDog.get('/', ensureAuthenticated, listRandomUsersController.handle);

export { randomDog };
