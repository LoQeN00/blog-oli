import React from 'react';
import BlogPostsList from '../components/BlogPostsList';
import Header from '../components/Header';
import { InferGetStaticPropsType } from 'next';
import { apolloClient } from '../graphql/apolloClient';
import { GetAllPostsListDocument, GetAllPostsListQuery, GetAllPostsListQueryVariables } from '../generated/graphql';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useSession } from 'next-auth/react';

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto flex justify-center flex-col">
        <Header />
        <BlogPostsList posts={data.posts} />
        <Footer />
      </div>
    </>
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
