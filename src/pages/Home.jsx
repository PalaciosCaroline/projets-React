import React, { useState, useEffect } from 'react'
import Banner from './../components/Banner'
import imageHome from './../assets/img_home.png'
import Boxcards from '../components/Boxcards'
import Loader from '../components/Loader'

export default function Home() {
  const [logements, setlogements] = useState([])
  const [isDataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    async function fetchDatas() {
      setTimeout(() => {
        setDataLoading(false);
      }, 600);
      try {
        const response = await fetch('data.json')
        const logementsData = await response.json()
        setlogements(logementsData)
      } catch (err) {
        console.log(err, "Il y a eu un problème avec l'opération fetch")
      }
    }
    fetchDatas()
  }, [])

  return (
    isDataLoading ? <Loader /> : 
    <main className="box_home">
      <header className="bannerHome">
        <Banner image={imageHome} />
        <h1>
          Chez vous, <br />
          partout et ailleurs
        </h1>
      </header>
      <Boxcards logements={logements} />
    </main>
  )
}
