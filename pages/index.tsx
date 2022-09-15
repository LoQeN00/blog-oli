import React from 'react';
import BlogPostsList from '../components/BlogPostsList';
import Header from '../components/Header';
import { InferGetStaticPropsType } from 'next';
import { apolloClient } from '../graphql/apolloClient';
import {
  GetAllPostsListDocument,
  GetAllPostsListQuery,
  GetAllPostsListQueryVariables,
  Post,
} from '../generated/graphql';

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <BlogPostsList posts={data.posts} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetAllPostsListQuery, GetAllPostsListQueryVariables>({
    query: GetAllPostsListDocument,
    fetchPolicy: 'network-only',
  });

  return {
    props: {
      data,
    },
  };
};
