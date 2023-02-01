import Count from "../Count"


export default function Keydata({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) {
    return (
        <>
            <div>
                <Count name="Calories" value={calorieCount} unit="kCal"></Count>
            </div>
        </>
    )
}
