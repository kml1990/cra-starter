import Content from '@components/content/Content';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div className="Home"><Content text="Home Page"><Link to="/about">About</Link></Content></div>
);

export default Home;
