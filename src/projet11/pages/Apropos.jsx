import React, { useState, useEffect } from 'react'
import Banner from './../components/Banner'
import imageApropos from "./../assets/img_apropos.png"
import imageAproposMobile from "./../assets/img_apropos_mobile.jpg"
import Collapse from '../components/Collapse.jsx'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './../styles/index.scss'

export default function Apropos() {
  const dataApropos = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  const [largeur, setLargeur] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth);
    return () => {window.removeEventListener('resize', changeWidth)}
  }, [])

  return (
    <>
    <Menu/>
    <main className="apropos_page">
      <Banner image={largeur > 800 ? `${imageApropos}` : `${imageAproposMobile}`}/>
      <div className="apropos_boxText">
        {dataApropos.map((elt, index) => (
          <Collapse
            title={elt.title}
            content={elt.content}
            key={`${elt.title}-${index}`}
          />
        ))}
      </div>
    </main>
    <Footer/>
    </>
  )
}
