import styles from '../../styles/Count.module.css'

import PropTypes from 'prop-types'

/**
 * Count
 * @param {string} icon
 * @param {string} name
 * @param {string} cat
 * @param {number} value
 * @param {string} unit
 * @component Icon with information 
 */

function Count({ icon, name, cat, value, unit }) {
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

Count.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default Count