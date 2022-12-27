import Router from './Router'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Menu from './components/Menu'
import { useState, useEffect } from 'react'

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    loader ? (
      <div className="loader_appli">
      <Loader />
      </div>
    ) : (
    <>
      <Menu />
      <Router />
      <Footer />
    </>
    )
  )
}
