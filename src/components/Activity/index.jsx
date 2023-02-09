// Import modules
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

// Import CSS module
import styles from './Activity.module.css'

/**
 * React component with BarChart (from recharts)
 * Display stats related to weight and burnt calories
 * @param {array} activityData
 * @component
 */
function Activity({ activityData }) {
    // Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}kcal`}</p>
                </div>
            );
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Activité quotidienne</div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={activityData}
                        barGap={8}>
                        <CartesianGrid strokeDasharray='3 3' vertical={false} />
                        <XAxis dataKey='dayIndex' tickLine={false} axisLine={false} />
                        <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
                        <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                        <YAxis dataKey='calories' type='number' yAxisId='calories' hide />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} />
                        <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30' />
                        <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7} yAxisId='calories' fill='#E60000' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
// PropTypes definition
Activity.propTypes = {
    activityData: PropTypes.array.isRequired,
};

export default Activity