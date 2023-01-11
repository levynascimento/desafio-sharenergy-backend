import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, address, cpf } = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    const user = await createClientUseCase.execute({
      name,
      email,
      phone,
      address,
      cpf,
    });

    return response.json(user);
  }
}

export { CreateClientController };
