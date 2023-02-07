// Import CSS module
import styles from './Dashboard.module.css'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react';

//import fetchData from '../../api/fetchData/index.js';
import { fetchActivityData, fetchAverageData, fetchPerformanceData, fetchUserData } from '../../api/fetchData/index'
import Data from '../../classes/Data';


import Greetings from '../../components/Greetings';
import Activity from '../../components/Activity';
import AverageSessions from '../../components/AverageSessions';
import Performance from '../../components/Performance';
import Keydata from '../../components/Keydata';
import Score from '../../components/Score';

/**
 * React component
 * Display dashboard with Greetings, Activity, AverageSessions, Performance, Score, Keydata 
 * @component
 */
function Dashboard() {

    const { id } = useParams();
    const [userData, setUserData] = useState({})
    const [activityData, setActivityData] = useState({})
    const [averageData, setAverageData] = useState({})
    const [performance, setPerformance] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    let errorStatus = false;
    let myData;

    useEffect(
        () => {
            getData()
        }, []
    )

    async function getData() {
        setDataLoading(true)
        const resUserData = await fetchUserData(id)
        setUserData(resUserData)
        const resActivityData = await fetchActivityData(id)
        setActivityData(resActivityData)
        const resAverageData = await fetchAverageData(id)
        setAverageData(resAverageData)
        const resPerformanceData = await fetchPerformanceData(id)
        setPerformance(resPerformanceData)
        setDataLoading(false)
    }

    if (userData.id !== undefined && activityData.userId !== undefined && averageData.userId !== undefined && performance.userId !== undefined) {
        errorStatus = false
        myData = new Data(userData, activityData, averageData, performance)

        console.log(myData)
    } else {
        errorStatus = true
    }

    return (

        isDataLoading ? (
            <div className={styles.dashboard}>
                <div>Loading</div>
            </div>

        )

            :
            (
                errorStatus ? (

                    <div className={styles.dashboard}>
                        <div>Impossible de récupérer les données depuis l'API</div>
                    </div>
                )
                    : (
                        <div className={styles.dashboard}>
                            <Greetings firstName={myData.firstName} ></Greetings>
                            <div className={styles.stats}>
                                <div className={styles.charts}>
                                    <div className={styles.activityData}>
                                        <Activity activityData={myData.activityData}></Activity>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.box}>
                                            <AverageSessions averageData={myData.averageData} ></AverageSessions>
                                        </div>
                                        <div className={styles.box}>
                                            <Performance performanceData={myData.performanceData}></Performance>
                                        </div>
                                        <div className={styles.box}>
                                            <Score scoreData={myData.todayScore}></Score>
                                        </div>
                                    </div>
                                </div>
                                <Keydata
                                    className={styles.keydata}
                                    calorieCount={myData.calorieCount}
                                    proteinCount={myData.proteinCount}
                                    carbohydrateCount={myData.carbohydrateCount}
                                    lipidCount={myData.lipidCount}
                                >
                                </Keydata>
                            </div>
                        </div>
                    )
            )

    )





}

export default Dashboard