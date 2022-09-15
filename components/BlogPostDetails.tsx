import React from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { NextReactMarkdown } from './NextReactMarkdown';
import Link from 'next/link';
import Stars from './Stars';

interface BlogPostItemDetails {
  id: string;
  title: string;
  date: string;
  coverImageUrl: string;
  author: string;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  authorPicture: string;
  rating: number;
}

type Props = {
  data: BlogPostItemDetails;
};

const BlogPostDetails = ({ data }: Props) => {
  return (
    <div>
      <div className="p-4">
        <Link href="/" passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 bg-white rounded-full p-1 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto my-20 bg-white shadow-2xl p-6 rounded-lg space-y-4 ">
        <div className="flex max-w-[90%] items-center p-4">
          <div className="relative rounded-full overflow-hidden w-[64px]">
            <Image
              src={data.authorPicture}
              width={4}
              height={4}
              layout="responsive"
              alt={data.author}
              objectFit="cover"
            />
          </div>
          <div className="ml-4 space-y-3">
            <h1 className="font-semibold">{data.author}</h1>
            <p>{data.date}</p>
          </div>
        </div>
        <h1 className="p-4 text-2xl font-bold">{data.title}</h1>
        <article className="prose lg:prose-xl px-4">
          <NextReactMarkdown description={data.content} />
        </article>
        <Stars rating={data.rating} />
      </div>
    </div>
  );
};

export default BlogPostDetails;
