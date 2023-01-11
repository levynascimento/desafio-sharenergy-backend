import { Router } from 'express';

import { CreateClientController } from '@modules/client/useCases/createUser/CreateClientController';
import { DeleteClientController } from '@modules/client/useCases/deleteUser/DeleteClientController';
import { ListAllClientsController } from '@modules/client/useCases/listAllUsers/ListAllClientsController';
import { ListClientByIdController } from '@modules/client/useCases/listUserById/ListClientByIdController';
import { UpdateClientController } from '@modules/client/useCases/updateUser/UpdateClientController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();

const updateClientController = new UpdateClientController();

const listClientByIdController = new ListClientByIdController();

const listAllClientsController = new ListAllClientsController();

const deleteClientController = new DeleteClientController();

clientsRoutes.post('/', createClientController.handle);

clientsRoutes.patch('/:id', updateClientController.handle);

clientsRoutes.get('/:id', listClientByIdController.handle);

clientsRoutes.get('/', listAllClientsController.handle);

clientsRoutes.delete('/:id', deleteClientController.handle);

export { clientsRoutes };
