declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    name: string;
    surname: string;
  }

  interface Session {
    user: User;
  }
}
