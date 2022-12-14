import React,{useState,useEffect} from 'react';


// function Datalogements() {
//   const [logements,setlogements]=useState([]);
//   const getlogements=()=>{
//     fetch('data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setlogements(myJson)
//       });
//   }
//   useEffect(()=>{
//     getlogements()
//   },[])

//   return (
//     <div className="logements">
//      {
//        logements && logements.length>0 && logements.map((logement) => {return (<Cardlogement key={logement.id} location={logement}/>)})
     
//      }
//     </div>
//   );
// }

// export default Datalogements;

