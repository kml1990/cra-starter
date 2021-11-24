import React from 'react';
import logo from '@assets/logo.svg';

import styles from './Content.module.scss';

export interface ContentProps {
  text?: string;
}

const Content: React.FC<ContentProps> = ({ text = 'Simple Text', children }) => (
  <div className={styles.Content}>
    <img className={styles.logo} src={logo} alt="logo" />
    <h1>
      {`CRA Starter - ${text}`}
    </h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, porro!</p>
    {children}
  </div>
);

export default Content;
