// Import components
import Copyright from '../Copyright'
import Navicon from '../Navicon'

//Import assets
import meditation from '../../assets/activity/meditation.svg'
import swimming from '../../assets/activity/swimming.svg'
import cycling from '../../assets/activity/cycling.svg'
import lifting from '../../assets/activity/lifting.svg'

// Import styles
import styles from './Sidebar.module.css'

/**
 * React component
 * Display sidebar with list of activity icons (meditation, swimming, cycling, lifting) and copyright
 * @param {number} scoreData
 * @component
 */
export default function Sidebar() {
    return (
        <>
            <nav className={styles.sidebar}>
                <div className={styles.activities}>
                    <Navicon path={meditation}></Navicon>
                    <Navicon path={swimming}></Navicon>
                    <Navicon path={cycling}></Navicon>
                    <Navicon path={lifting}></Navicon>
                </div>
                <Copyright></Copyright>
            </nav>
        </>
    )
}
