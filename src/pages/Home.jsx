import React, { useState, useEffect } from 'react'
import Banner from './../components/Banner'
import Boxcards from '../components/Boxcards'
import Loader from '../components/Loader'

export default function Home() {
  const [logements, setlogements] = useState([])
  const [isDataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    async function fetchDatas() {
      // setDataLoading(true)
      try {
        const response = await fetch('data.json')
        const logementsData = await response.json()
        setlogements(logementsData)
      } catch (err) {
        console.log(err, "Il y a eu un problème avec l'opération fetch")
      }
      // finally{
      //   setDataLoading(false)
      // }
    }
    fetchDatas()
  }, [])

  // useEffect(() => {
  //   fetch('data.json')
  //   .then((res) => res.json())
  //   .then((result) => {
  //     setlogements(result)
  //   })
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false);
  //   }, 1000);
  // }, []);

  return (
    //  isDataLoading ? (
    // <Loader />
    // ) : (
    <main className="box_home">
      <header className="bannerHome">
        <Banner />
        <h1>
          Chez vous, <br />
          partout et ailleurs
        </h1>
      </header>

      <Boxcards logements={logements} />
    </main>
    // )
  )
}