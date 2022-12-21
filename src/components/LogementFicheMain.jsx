import Accordion from "./Accordion";

export default function LogementFicheMain({logement}) {

  return (
    <div className="LogementFiche_boxArticles">
      <Accordion
        title="Description"
        content={logement.description}
        key={`${logement.title}-${logement.id}`}
      />
      <Accordion
        title="Equipements"
        content={
          <ul className="equipement_list">
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        }
      />
    </div>
  );
}
