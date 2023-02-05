import Sidebar from '../../components/Sidebar'

// Import CSS module
import styles from '../../styles/Home.module.css'

import { Link } from 'react-router-dom'

function Home() {

    return (
        <main className={styles.main}>
            <Sidebar></Sidebar>
            <div className={styles.selection}>
                <div className={styles.option}>
                    <div className={styles.user}>
                        <Link to="/dashboardmock">Mock</Link>
                    </div>
                </div>
                <div className={styles.option}>
                    <div className={styles.user}>
                        <Link to="/dashboard/12">API: User12</Link>
                    </div>
                    <div className={styles.user}>
                        <Link to="/dashboard/18">API : User18</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home