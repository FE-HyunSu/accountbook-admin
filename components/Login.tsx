import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Login = ({ title, content }: CardProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  );
};

export default Login;
