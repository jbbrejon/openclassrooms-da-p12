
// Import styles
import styles from '../../styles/Navicon.module.css'

export default function Navicon({ path }) {
    return (
        <>
            <div className={styles.icon}>
                <img src={path} alt="activity" />
            </div>
        </>
    )
}