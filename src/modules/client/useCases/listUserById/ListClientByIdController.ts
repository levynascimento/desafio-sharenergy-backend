import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListClientByIdUseCase } from './ListClientByIdUseCase';

class ListClientByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listClientByIdUseCase = container.resolve(ListClientByIdUseCase);

    const user = await listClientByIdUseCase.execute(id);

    return response.status(200).json(user);
  }
}

export { ListClientByIdController };
