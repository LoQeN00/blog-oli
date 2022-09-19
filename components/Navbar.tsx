import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

type Props = {};

const Navbar = (props: Props) => {
  const { data: session, status } = useSession();

  return (
    <nav className="p-4 shadow-[0_15px_100px_-2px_rgba(0,0,0,0.3)] mt-4 rounded-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-col sm:flex-row space-y-4 sm:space-y-0">
        <div className="flex justify-center items-center space-x-4">
          <Link href="/">
            <a className="text-2xl">HOME</a>
          </Link>
          <Link href="/">
            <a className="text-2xl">HOME</a>
          </Link>
          <Link href="/">
            <a className="text-2xl">HOME</a>
          </Link>
        </div>
        {status === 'unauthenticated' && (
          <Link href="/signup">
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </Link>
        )}
        {status === 'authenticated' && (
          <div className="flex space-x-4">
            <p>{session?.user?.email}</p>
            <p> | </p>
            <button onClick={() => signOut()}>Wyloguj</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
