import axios from 'axios';
import { Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';

class ListCatController {
  async handle(request: Request, response: Response): Promise<void> {
    try {
      const { code } = request.params;

      const { data } = await axios(`https://http.cat/${code}`, {
        responseType: 'arraybuffer',
      });

      response.contentType('image/jpg');
      response.end(Buffer.from(data, 'utf-8'));
    } catch {
      throw new AppError('Gato não encontrado');
    }
  }
}

export { ListCatController };
