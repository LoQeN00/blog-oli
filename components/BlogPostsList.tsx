import React from 'react';
import { GetAllPostsListQuery } from '../generated/graphql';
import BlogPostListItem from './BlogPostListItem';

type Props = {
  posts: GetAllPostsListQuery['posts'];
};

const BlogPostsList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 flex-1">
      {posts.map((post) => {
        return (
          <BlogPostListItem
            key={post.id}
            data={{
              id: post.id,
              author: post.author?.name!,
              coverImageUrl: post.coverImage?.url!,
              date: post.date,
              excerpt: post.excerpt!,
              slug: post.slug,
              title: post.title,
            }}
          />
        );
      })}
    </div>
  );
};

export default BlogPostsList;
