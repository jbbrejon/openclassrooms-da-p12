
// Import styles
import styles from '../../styles/Navicon.module.css'

export default function Navicon(props) {
    return (
        <>
            <div className={styles.icon}>
                <img src={props.path} alt="activity" />
            </div>
        </>
    )
}