import Cardlogement from "./Cardlogement";

function Boxcards({logements}) {

  return (
    <div className="boxcards">
      {logements &&
        logements.length > 0 &&
        logements.map((logement) => (
          <Cardlogement key={logement.id} logement={logement} />
        ))}
    </div>
  );
}

export default Boxcards;
