
import Footer from './components/Footer'
import Loader from './components/Loader'
import Menu from './components/Menu'
import Home from './pages/Home'
// import Router1 from '../Router1'
import { useState, useEffect } from 'react'

export default function Appprojet11() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 800);
  }, []);

  return (
    loader ? (
      <div className="loader_appli">
      <Loader />
      </div>
    ) : (
    <>
      <Menu />
      <Home/>
      <Footer />
    </>
    )
  )
}
