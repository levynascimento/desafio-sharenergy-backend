import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { clientsRoutes } from './clients.routes';
import { cat } from './httpCat.routes';
import { randomDog } from './randomDog.routes';
import { randomUsers } from './randomUsers.routes';

const router = Router();

router.use('/clients', clientsRoutes);

router.use(authenticateRoutes);

router.use('/randomUsers', randomUsers);

router.use('/randomDog', randomDog);

router.use('/cat', cat);

export { router };
