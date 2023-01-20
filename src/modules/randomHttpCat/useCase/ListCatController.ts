import axios from 'axios';
import { Request, Response } from 'express';

class ListCatController {
  async handle(request: Request, response: Response): Promise<void> {
    try {
      const { code } = request.params;

      const { data } = await axios(`https://http.cat/${code || 404}`, {
        responseType: 'arraybuffer',
      });

      response.contentType('image/jpg');
      response.end(Buffer.from(data, 'utf-8'));
    } catch {
      const { data } = await axios(`https://http.cat/404`, {
        responseType: 'arraybuffer',
      });

      response.contentType('image/jpg');
      response.status(404).end(Buffer.from(data, 'utf-8'));
    }
  }
}

export { ListCatController };
