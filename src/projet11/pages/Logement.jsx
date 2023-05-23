import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SlideShow from './../components/SlideShow'
import LogementFicheHost from './../components/LogementFicheHost'
import LogementFicheTitle from './../components/LogementFicheTitle'
import LogementFicheMain from './../components/LogementFicheMain'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './../styles/index.scss'

export default function Logement() {
  document.title = 'Projet 11';
  const [logement, setlogement] = useState({
    id: '',
    title: '',
    cover: '',
    pictures: [],
    host: { name: '', picture: '' },
    rating: '',
    location: '',
    equipments: [],
    tags: [],
  })
  
  window.scrollTo(0, 0)
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let logementNew = data.find((item) => item.id === id)
        if (logementNew !== undefined) {
          setlogement(logementNew)
        } else {
          navigate('/error')
        }
      })
  }, [id, navigate])

  return (
    <>
    <Menu/>
      <main className="box_logementFiche">
        <SlideShow imgsLogement={logement.pictures} />
        <header className="logementFiche_header">
          <LogementFicheTitle logement={logement} />
          <LogementFicheHost logement={logement} />
        </header>
        <LogementFicheMain logement={logement} />
      </main> 
      <Footer/>
      </> 
  )
}
