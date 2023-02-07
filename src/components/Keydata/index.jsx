import KeydataItem from "../KeydataItem"

import energy from '../../assets/keydata/energy.svg'
import chicken from '../../assets/keydata/chicken.svg'
import apple from '../../assets/keydata/apple.svg'
import cheeseburger from '../../assets/keydata/cheeseburger.svg'

import styles from '../../styles/Keydata.module.css'

import PropTypes from 'prop-types'

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

Keydata.propTypes = {
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
};

export default Keydata