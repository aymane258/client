/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Welcome, please login</div>;
  }

  return (
    <React.Fragment>
      <img src={user.picture} width="250" alt="Profile" />
      <h2>Welkom {user.name}!</h2>
    </React.Fragment>
  );
};

export default Home;