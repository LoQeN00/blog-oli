import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
  data: BlogPostListItem;
};

interface BlogPostListItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImageUrl: string;
  author: string;
}

const BlogPostListItem = ({ data }: Props) => {
  return (
    <div className="rounded-lg p-4 flex justify-center flex-col items-center ">
      <Link href={`/posts/${data.slug}`} passHref>
        <div className="relative w-[80%] rounded-t-lg overflow-hidden group cursor-pointer">
          <Image
            layout="responsive"
            width={16}
            height={9}
            src={data.coverImageUrl}
            alt={data.title}
            objectFit="contain"
            className="group-hover:scale-110 transition-all ease"
          />
          <div className="bg-white p-4 rounded-b-lg shadow-2xl space-y-2">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">{data.title}</h1>
              <p className="text-gray-400 text-sm">{data.date}</p>
            </div>

            <p className="text-gray-400">{data.excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostListItem;
