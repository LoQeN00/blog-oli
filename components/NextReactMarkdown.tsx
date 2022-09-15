import React from 'react';
import Link from 'next/link';
import { MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote';

type Props = {
  description: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export const NextReactMarkdown = ({ description }: Props) => {
  return (
    <MDXRemote
      {...description}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }

          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    />
  );
};
