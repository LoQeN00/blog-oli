import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="antialiased bg-gradient-to-r from-green-800 to-amber-100 px-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
