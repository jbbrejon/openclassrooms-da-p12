// Import modules
import PropTypes from 'prop-types'

// Import components
import KeydataItem from "../KeydataItem"

// Import assets
import energy from '../../assets/keydata/energy.svg'
import chicken from '../../assets/keydata/chicken.svg'
import apple from '../../assets/keydata/apple.svg'
import cheeseburger from '../../assets/keydata/cheeseburger.svg'

// Import CSS module
import styles from './Keydata.module.css'

/**
 * React component
 * Display list of keydata elements
 * @param {number} : calorieCount
 * @param {number} : proteinCount
 * @param {number} : carbohydrateCount
 * @param {number} : lipidCount
 * @component
 */
function Keydata({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) {
    return (
        <>
            <div className={styles.keydata}>
                <KeydataItem icon={energy} name="Calories" cat="calorie" value={calorieCount} unit="kCal"></KeydataItem>
                <KeydataItem icon={chicken} name="Proteines" cat="protein" value={proteinCount} unit="g"></KeydataItem>
                <KeydataItem icon={apple} name="Glucides" cat="carbohydrate" value={carbohydrateCount} unit="g"></KeydataItem>
                <KeydataItem icon={cheeseburger} name="Lipides" cat="lipid" value={lipidCount} unit="g"></KeydataItem>
            </div>
        </>
    )
}

// PropTypes definition
Keydata.propTypes = {
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
};

export default Keydata
