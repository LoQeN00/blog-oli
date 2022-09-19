import {
  FindAccountByEmailDocument,
  FindAccountByEmailQuery,
  FindAccountByEmailQueryVariables,
} from '../../../generated/graphql';
import { apolloClient } from '../../../graphql/apolloClient';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import NextAuth from 'next-auth/next';

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await apolloClient.query<FindAccountByEmailQuery, FindAccountByEmailQueryVariables>({
          query: FindAccountByEmailDocument,
          variables: {
            email: credentials.email,
          },
          fetchPolicy: 'network-only',
        });

        if (!user.data.account) return null;

        const match = await compare(credentials.password, user.data.account?.password!);

        if (!match) return null;

        return {
          id: user.data.account?.id,
          email: user.data.account?.email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      //@ts-ignore
      session.user.id = token.sub;

      return session;
    },
  },
});
