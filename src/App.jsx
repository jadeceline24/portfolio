import React, { lazy } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from './components/Footer';
import MovingBox from './components/MovingBox';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

const Main = lazy(() => import('./components/Main'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => {
      clearTimeout(t);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div className="load">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Main />
          <Projects />
          <MovingBox />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
