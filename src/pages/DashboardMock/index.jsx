
// Import CSS module
import styles from '../Dashboard/Dashboard.module.css'


import Greetings from '../../components/Greetings';
import Keydata from '../../components/Keydata';
import Activity from '../../components/Activity';
import AverageSessions from '../../components/AverageSessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';

import mockData from '../../api/mockData'

function DashboardMock() {
    const userData = mockData()
    return (


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
    )
}

export default DashboardMock