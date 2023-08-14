import * as bcrypt from 'bcrypt';
import { CreateUserInput } from 'types/graphql';

export const usersData: CreateUserInput[] = [
  {
    email: 'mathieu@gmail.com',
    name: 'Mathieu',
    password: await bcrypt.hash('password', 10),
  },
  {
    email: 'elisa@gmail.com',
    name: 'Elisa',
    password: await bcrypt.hash('password', 10),
  },
];
