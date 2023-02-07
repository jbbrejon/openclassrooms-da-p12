// Import styles
import styles from './Navicon.module.css'

// Import Proptypes
import PropTypes from 'prop-types'

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

// PropTypes configuration
Navicon.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Navicon