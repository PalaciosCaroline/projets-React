import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import Loader from '../components/Loader'
import SlideShow from '../components/SlideShow'
import LogementFicheHost from '../components/LogementFicheHost'
import LogementFicheTitle from '../components/LogementFicheTitle'
import LogementFicheMain from '../components/LogementFicheMain'

export default function Logement() {
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
  
  // const [isLoading, setLoading] = useState(true)

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
        // setLoading(false);
      })
  }, [id, navigate])

  return (
    <>
      {/* {isLoading ? (
      <Loader />
      ) : ( */}
      <main className="box_logementFiche">
        <SlideShow imgsLogement={logement.pictures} />
        <header className="logementFiche_header">
          <LogementFicheTitle autoFocus logement={logement} />
          <LogementFicheHost logement={logement} />
        </header>
        <LogementFicheMain logement={logement} />
      </main>
      {/* )} */}
    </>
  )
}
