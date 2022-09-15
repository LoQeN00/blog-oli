import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="text-center p-4 my-20 space-y-6">
      <h1 className="text-4xl font-semibold">Your Blog Title Here</h1>
      <h2>Tutaj jakiś podpisz dajesz fajny pod tym bo to git wygląda</h2>
    </header>
  );
};

export default Header;
