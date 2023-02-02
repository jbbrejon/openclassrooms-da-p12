import Sidebar from '../../components/Sidebar'

// Import CSS module
import styles from '../../styles/User.module.css'

import { dataUser, dataActivity, dataAverage, dataPerformance } from '../../data/userDataMock.js'

import Data from '../../common/Data'



function UserMock() {

    let myData = new Data(dataUser, dataActivity, dataAverage, dataPerformance)

    return (
        <main className={styles.main}>
            <Sidebar></Sidebar>
            <div>Hello {myData.firstName} </div>
        </main>
    )
}

export default UserMock