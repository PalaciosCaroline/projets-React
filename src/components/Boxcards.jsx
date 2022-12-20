import Cardlogement from "./Cardlogement";

function Boxcards(props) {

  return (
    <div className="boxcards">
      {props.logements &&
        props.logements.length > 0 &&
        props.logements.map((logement) => (
          <Cardlogement key={logement.id} logement={logement} />
        ))}
    </div>
  );
}

export default Boxcards;
