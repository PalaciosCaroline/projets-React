export default function LogementFicheTitle({ logement }) {
  return (
    <div className="box_logementFicheTitle">
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>
      <div className="boxTags">
        {logement.tags.map((item, index) => (
          <div key={`${item}-${index}`} className="tags">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
