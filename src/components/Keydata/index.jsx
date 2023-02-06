import Count from "../Count"

import energy from '../../assets/keydata/energy.svg'
import chicken from '../../assets/keydata/chicken.svg'
import apple from '../../assets/keydata/apple.svg'
import cheeseburger from '../../assets/keydata/cheeseburger.svg'

import styles from '../../styles/Keydata.module.css'

import PropTypes from 'prop-types'

/**
 * Keydata
 * @param {number} calorieCount
 * @param {number} proteinCount
 * @param {number} carbohydrateCount
 * @param {number} lipidCount
 * @component List of Count components
 */

function Keydata({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) {
    return (
        <>
            <div className={styles.keydata}>
                <Count icon={energy} name="Calories" cat="calorie" value={calorieCount} unit="kCal"></Count>
                <Count icon={chicken} name="Proteines" cat="protein" value={proteinCount} unit="g"></Count>
                <Count icon={apple} name="Glucides" cat="carbohydrate" value={carbohydrateCount} unit="g"></Count>
                <Count icon={cheeseburger} name="Lipides" cat="lipid" value={lipidCount} unit="g"></Count>
            </div>
        </>
    )
}

Keydata.propTypes = {
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
};

export default Keydata
