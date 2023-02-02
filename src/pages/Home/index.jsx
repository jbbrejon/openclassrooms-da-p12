import Sidebar from '../../components/Sidebar'

// Import CSS module
import styles from '../../styles/Home.module.css'

import { Link } from 'react-router-dom'

function Home() {

    return (
        <main className={styles.main}>
            <Sidebar></Sidebar>
            <div> </div>
        </main>
    )
}

export default Home