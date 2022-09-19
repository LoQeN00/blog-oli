import React from 'react';
import { SignupForm } from '../components/SignupForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Props = {};

const SignupPage = (props: Props) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 flex-1 w-full">
        <SignupForm />
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <Footer />
      </div>
    </div>
  );
};

export default SignupPage;
