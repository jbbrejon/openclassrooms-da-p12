// Import CSS module
import styles from './Home.module.css'

// Import Link module
import { Link } from 'react-router-dom'

/**
 * React component
 * Display home page with links to dashboard (Mock and API)
 * @component
 */
function Home() {

    return (
        <>
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
        </>
    )
}

export default Home