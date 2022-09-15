import React from 'react';
import {
  GetPostBySlugDocument,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetPostsSlugsDocument,
  GetPostsSlugsQuery,
} from '../../generated/graphql';
import { apolloClient } from '../../graphql/apolloClient';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextReactMarkdown } from '../../components/NextReactMarkdown';
import BlogPostDetails from '../../components/BlogPostDetails';

type Props = {};

const PostDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <BlogPostDetails
        data={{
          author: data?.author?.name!,
          content: data?.content!,
          coverImageUrl: data?.coverImage?.url!,
          date: data?.date,
          id: data?.id!,
          title: data?.title!,
          authorPicture: data?.author?.picture?.url!,
        }}
      />
    </div>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetPostsSlugsQuery>({ query: GetPostsSlugsDocument });

  const paths = data.posts.map((post) => {
    return { params: { slug: post.slug } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  if (!params?.slug) return { props: {}, notFound: true };

  const { data, loading, error } = await apolloClient.query<GetPostBySlugQuery, GetPostBySlugQueryVariables>({
    query: GetPostBySlugDocument,
    variables: {
      slug: params.slug,
    },
  });

  if (!data.post) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.post,
        content: await serialize(data.post.content.markdown),
      },
    },
  };
};
