// Import modules
import PropTypes from 'prop-types'

// Import CSS module
import styles from './Navicon.module.css'

/**
 * React component
 * Display left sidebar icon
 * @param {string} : path
 * @component
 */
function Navicon({ path }) {
    return (
        <>
            <div className={styles.icon}>
                <img src={path} alt="activity" />
            </div>
        </>
    )
}

// PropTypes definition
Navicon.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Navicon