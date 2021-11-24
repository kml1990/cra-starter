import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '@utils/constants/routes.const';
import About from '@views/about/About';
import Home from '@views/home/Home';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path={AppRoutes.HOME} element={<Home />} />
      <Route path={AppRoutes.ABOUT} element={<About />} />
    </Routes>
  </Router>

);

export default App;
