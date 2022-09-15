import React from 'react';
import Image from 'next/image';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="text-center p-4 my-20 space-y-6 flex justify-center items-center flex-col">
      <h1 className="text-4xl font-semibold">Your Blog Title Here</h1>
      <h2>Tutaj jakiś podpisz dajesz fajny pod tym bo to git wygląda</h2>
      <div className="relative rounded-full overflow-hidden w-[128px]">
        <Image
          src="https://media.graphassets.com/1rpDziG1RxGIF7FbWokU"
          width={4}
          height={4}
          layout="responsive"
          alt="es"
          objectFit="cover"
        />
      </div>
    </header>
  );
};

export default Header;
