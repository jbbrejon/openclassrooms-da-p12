
// Import styles
import styles from '../../styles/Navicon.module.css'

import PropTypes from 'prop-types'

function Navicon({ path }) {
    return (
        <>
            <div className={styles.icon}>
                <img src={path} alt="activity" />
            </div>
        </>
    )
}

Navicon.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Navicon