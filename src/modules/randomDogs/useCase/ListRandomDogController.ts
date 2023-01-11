import axios from 'axios';
import { Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';

class ListRandomDogController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { data } = await axios('https://random.dog/woof.json');

      return response.json(data);
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { ListRandomDogController };
