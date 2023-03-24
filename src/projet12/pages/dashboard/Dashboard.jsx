import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Navhorizontale from '../../components/Navhorizontale'
import Navverticale from '../../components/navverticale/Navverticale'
import { getUserById, getUserActivityById,getUserAverageSession,getUserPerformance } from './../../mock/ApiData.mock'
// import { getData } from '../../hooks/usefetch'
import { useParams } from 'react-router'
import KeyfigureCard from '../../components/keyfigurecard/KeyfigureCard'
import DailyActivity from '../../components/dailyactivity/DailyActivity'
import AverageSessions from '../../components/averagesessions/AverageSessions'
import BoxRadar from '../../components/boxradar/BoxRadar'
import BoxScore from '../../components/boxscore/BoxScore'
import {
  formatterDataPerformance,
  formatterDataAverageSessions,
  formatterDataActivity,
  formatterKilo,
} from '../../utils/formatData'
import caloriesIcon from './../../assets/calories-icon.png'
import fatIcon from './../../assets/fat-icon.png'
import proteinIcon from './../../assets/protein-icon.png'
import carbsIcon from './../../assets/carbs-icon.png'
import {Keyfigures,SessionWrapper,Column1,BoxResult,BoxTitle,Wrapped, Mainapp} from './dashboard.style'
import GlobalStyle from './../../theme/globalStyles';

/** render Main Dashboard
 * @param { id } string
 * @param { type } string
 * @type {FC React} BoxScore,BoxScore,AverageSessions, DailyActivity, KeyfigureCard
 * @type {function(id:string, type:string) => promise} getData
 * @type {object} userInfos userPerformance userAverageSessions userActivity
 * @type {function} formatterDataPerformance, formatterDataAverageSessions, formatterDataActivity, * *        formatterKilofunction JS
 * @return {JSX FC React}
 */
export default function Dashboard() {
  document.title = 'Projet 12';
  const [userInfos, setUserInfos] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userActivity, setUserActivity] = useState([])
  let { id } = useParams()
  id = parseInt(id)

  useEffect(() => {
      const res =  getUserById(id)
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données générales')
      setUserInfos(res)
  }, [id])

  useEffect(() => {
      const res = getUserAverageSession(id, 'averageSessions')
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données de durée moyenne des sessions')
      const data = formatterDataAverageSessions(res.sessions)
      setUserAverageSessions(data)
  }, [id])

  useEffect(() => {
      const res = getUserPerformance(id)
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données de performance')
      const data = formatterDataPerformance(res.data)
      setUserPerformance(data)
  }, [id])

  useEffect(() => {
      const res = getUserActivityById(id)
      if (!res) return alert( 'Une erreur s\'est produite lors de la récupération des données sur l\'activité quotidienne')
      const data = formatterDataActivity(res.sessions)
      setUserActivity(data)
  }, [id])

  if (userInfos.length <= 0) return null
  let valueKilo = formatterKilo(userInfos.keyData.calorieCount)

  return (
    <>
    <GlobalStyle />
    <Navhorizontale />
      <Mainapp>
        <Navverticale />
        <Wrapped>
          <BoxTitle>
            <h1>
              Bonjour&ensp;<span>{userInfos.userInfos.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier &nbsp;👏</p>
          </BoxTitle>
         <BoxResult>
            <Column1>
              <DailyActivity userActivity={userActivity} />
              <SessionWrapper>
                <AverageSessions userAverageSessions={userAverageSessions} /> 
                <BoxRadar userPerformance={userPerformance} />
                <BoxScore dataUser={userInfos} />
              </SessionWrapper> 
            </Column1>
            <Keyfigures>
              <KeyfigureCard  img={caloriesIcon} type="Calories" value={`${valueKilo}Kcal`} />
              <KeyfigureCard
                img={proteinIcon}
                type="Protéines"
                value={`${userInfos.keyData.proteinCount}g`}
              />
              <KeyfigureCard
                img={carbsIcon}
                type="Glucides"
                value={`${userInfos.keyData.carbohydrateCount}g`}
              />
              <KeyfigureCard
                img={fatIcon}
                type="Lipides"
                value={`${userInfos.keyData.lipidCount}g`}
              />
            </Keyfigures>
          </BoxResult> 
        </Wrapped>
    </Mainapp>
    </>
  )
}

Dashboard.propTypes = {
  dataUser: PropTypes.object,
  averageSessions: PropTypes.func,
  performance: PropTypes.func,
  activity: PropTypes.func,
  getData: PropTypes.func,
  userInfos: PropTypes.object,
  userPerformance: PropTypes.object,
  userActivity: PropTypes.object,
  userAverageSessions: PropTypes.object,
  formatterKilo: PropTypes.func,
  valueKilo: PropTypes.string,
  data: PropTypes.object,
  labelPourcent: PropTypes.number,
}


