// Import Logo
import logo from '../../assets/logo/logo.svg'

// Import CSS module
import styles from '../..//styles/Header.module.css'

import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <header className={styles.header}>
                <img className={styles.logo} src={logo} alt="logo Sportsee" />
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link to="/">Accueil</Link></li>
                        <li className={styles.li}>Profil</li>
                        <li className={styles.li}>Réglage</li>
                        <li className={styles.li}>Communauté</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header