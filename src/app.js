import Router from './Router'


export default function App() {
  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 800);
  // }, []);

  return (
    // loader ? (
    //   <div className="loader_appli">
    //   <Loader />
    //   </div>
    // ) : (
    <>
    <Router/>
     {/* <h1>Choississer le projet à visiter</h1>

     <NavLink to="/projet 11">Projet 11 site de Location d'appartement</NavLink>
     <NavLink to="/projet 12">Projet 12 Tableau analytique avec recharts</NavLink> */}
    </>
    )
  // )
}
