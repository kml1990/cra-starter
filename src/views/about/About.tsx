import Content from '@components/content/Content';
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <div className="About"><Content text="About Page"><Link to="/">Home</Link></Content></div>
);

export default About;
