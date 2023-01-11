import { Router } from 'express';

import { ListRandomDogController } from '@modules/randomDogs/useCase/ListRandomDogController';

const randomDog = Router();

const listRandomUsersController = new ListRandomDogController();

randomDog.get('/', listRandomUsersController.handle);

export { randomDog };
