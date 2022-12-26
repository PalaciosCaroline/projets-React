import Router from "./Router";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <Menu />
      <Router />
      <Footer />
    </>
  );
}
