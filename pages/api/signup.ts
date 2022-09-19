import {
  FindAccountByEmailDocument,
  FindAccountByEmailQuery,
  FindAccountByEmailQueryVariables,
  CreateAccountDocument,
  CreateAccountMutation,
  CreateAccountMutationVariables,
} from './../../generated/graphql';
import type { NextApiHandler } from 'next';
import { apolloClient } from '../../graphql/apolloClient';
import { hash } from 'bcryptjs';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.setHeader('Allow', 'POST').status(405).json({ error: 'Method Not Allowed' });

  const body = JSON.parse(req.body) as { email: string; password: string };

  const existingUser = await apolloClient.query<FindAccountByEmailQuery, FindAccountByEmailQueryVariables>({
    query: FindAccountByEmailDocument,
    variables: {
      email: body.email,
    },
  });

  if (existingUser.data.account) {
    res.status(400).json({ message: 'Istnieje już taki użytkownik' });
    return;
  }

  const hashedPassword = await hash(body.password, 12);

  await apolloClient.mutate<CreateAccountMutation, CreateAccountMutationVariables>({
    mutation: CreateAccountDocument,
    variables: {
      email: body.email,
      password: hashedPassword,
    },
  });

  res.status(201).json({ ok: true });
};

export default handler;
