import axios from 'axios';
import { Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';

interface IUserRandom {
  age: number;
  email: string;
  fullname: string;
  username: string;
  thumbnail: string;
  id: string;
}

class ListRandomUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { busca } = request.query;
      const { data } = await axios(
        `https://randomuser.me/api/?results=20&seed=abc`,
      );
      const { results } = data;
      const infoUsers = results.map((user: any): IUserRandom => {
        const { age } = user.dob;
        const { email } = user;
        const { first, last } = user.name;
        const { username } = user.login;
        const { uuid: id } = user.login;
        const { thumbnail } = user.picture;
        const fullname = `${first} ${last}`;

        return {
          age,
          email,
          username,
          fullname,
          thumbnail,
          id,
        };
      });

      const query = infoUsers.filter(user => {
        if (
          user.fullname.includes(busca) ||
          user.email.includes(busca) ||
          user.username.includes(busca)
        ) {
          return user;
        }
        return null;
      });

      const finalResult = busca ? query : infoUsers;

      return response.json(finalResult);
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { ListRandomUsersController };
