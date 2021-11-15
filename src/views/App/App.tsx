import React, { useState } from 'react';
import logo from '../../assets/logo.svg';

import styles from './App.module.scss';

export interface AppProps {
  myProp?: string;
}

const App: React.FC<AppProps> = ({ myProp = 'foo' }) => {
  const [myState, setMyState] = useState(myProp);

  const onClick = (): void => {
    setMyState('bar');
  };

  return (
    <div className={styles.app}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1>CRA Starter</h1>
      <button type="button" onClick={onClick}>
        {myState}
      </button>
    </div>
  );
};

export default App;
