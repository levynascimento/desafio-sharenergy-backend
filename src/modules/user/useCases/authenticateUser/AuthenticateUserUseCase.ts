/* eslint-disable no-underscore-dangle */
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new AppError('Email ou senha incorretos!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email ou senha incorretos!');
    }

    const token = sign({ id: user._id }, process.env.JWT_PASSWORD, {
      expiresIn: '8h',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        username: user.username,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
