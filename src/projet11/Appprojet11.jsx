import React, { useEffect, useState, lazy } from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Loader from './components/Loader';
import './styles/index.scss';

const LazyHome = lazy(() => import('./pages/Home'));

export default function Appprojet11() {
    const [isDataLoading, setDataLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setDataLoading(false);
      }, 1500); 
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
      <Menu />
      {isDataLoading ?
      <Loader /> :
        <LazyHome />}
      <Footer />
    </>
  );
}







