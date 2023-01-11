import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateClientUseCase } from './UpdateClientUseCase';

class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, address, cpf } = request.body;

    const updateClientUseCase = container.resolve(UpdateClientUseCase);

    await updateClientUseCase.execute({ name, email, phone, address, cpf });

    return response.status(204).send();
  }
}

export { UpdateClientController };
