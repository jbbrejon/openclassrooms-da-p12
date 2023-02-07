// Import styles

import styles from './Greetings.module.css'

import PropTypes from 'prop-types'

/**
 * React component
 * Display first name and congratulations message
 * @param {string} : firstName
 * @component
 */
function Greetings({ firstName }) {
    return (
        <><div className={styles.greetings}>
            <h1 className={styles.h1}>Bonjour <span className={styles.name}>{firstName}</span></h1>
            <div className={styles.congrats}>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
        </>
    )
}

Greetings.propTypes = {
    firstName: PropTypes.string.isRequired,
};

export default Greetings