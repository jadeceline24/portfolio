import React, { lazy } from 'react';
import Footer from './components/Footer';
import MovingBox from './components/MovingBox';
import Navbar from './components/Navbar';

const Main = lazy(() => import('./components/Main'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <div className="">
      <Navbar />
      <Main />
      <Projects />
      <MovingBox />
      <Footer />
    </div>
  );
}

export default App;
