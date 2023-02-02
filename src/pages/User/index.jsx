import Sidebar from '../../components/Sidebar'

// Import CSS module
import styles from '../../styles/User.module.css'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react';

import fetchData from '../../api/fetchData/index.js';

import Greetings from '../../components/Greetings';
import Activity from '../../components/Activity';
import AverageSessions from '../../components/AverageSessions';
import Performance from '../../components/Performance';
import Keydata from '../../components/Keydata';
import Score from '../../components/Score';


function User() {

    const { id } = useParams();
    const idInt = parseInt(id);
    const [userData, setUserData] = useState({})
    const [isDataLoaded, setDataLoaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getApi() {
            try {
                const userData = await fetchData(idInt)
                setUserData(userData)
            } catch (err) {
                setError(true)

            } finally {
                setDataLoaded(true)
            }
        }
        getApi()
    }, [idInt])


    return (
        isDataLoaded ? (
            <main className={styles.main}>
                <Sidebar></Sidebar>
                <div className={styles.dashboard}>
                    <Greetings firstName={userData.firstName} ></Greetings>
                    <div className={styles.stats}>
                        <div className={styles.charts}>
                            <div className={styles.activityData}>
                                <Activity activityData={userData.activityData}></Activity>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.box}>
                                    <AverageSessions averageData={userData.averageData} ></AverageSessions>
                                </div>
                                <div className={styles.box}>
                                    <Performance performanceData={userData.performanceData}></Performance>
                                </div>
                                <div className={styles.box}>
                                    <Score scoreData={userData.todayScore}></Score>
                                </div>
                            </div>
                        </div>
                        <Keydata
                            className={styles.keydata}
                            calorieCount={userData.calorieCount}
                            proteinCount={userData.proteinCount}
                            carbohydrateCount={userData.carbohydrateCount}
                            lipidCount={userData.lipidCount}
                        >
                        </Keydata>
                    </div>
                </div>
            </main>
        )
            : (
                <main className={styles.main}>
                    <Sidebar></Sidebar>

                </main>)
    )
}

export default User