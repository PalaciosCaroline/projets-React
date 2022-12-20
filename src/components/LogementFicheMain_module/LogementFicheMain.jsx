import Accordion from "../Accordion";
import "./logementFicheMain.css";

export default function LogementFicheMain(props) {
  let logement = props.logement;

  return (
    <div className="LogementFiche_boxArticles">
      <Accordion
        className="boxArticle"
        title="Description"
        content={logement.description}
        key={`${logement.title}-${logement.id}`}
      />
      <Accordion
        className="boxArticle"
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
