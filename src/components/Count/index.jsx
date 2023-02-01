import styles from '../../styles/Count.module.css'

export default function Count({ icon, name, cat, value, unit }) {
    return (
        <>
            <div className={styles.count}>
                <div className={`${styles.icon} ${styles[cat]}`}>
                    <img className={styles.caticon} src={icon} alt="activity" />
                </div>
                <div className={styles.info}>
                    <div className={styles.data}>{value.toLocaleString("en-US")}{unit}</div>
                    <div className={styles.name}>{name}</div>
                </div>
            </div>
        </>
    )
}