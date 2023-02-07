import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import styles from './Activity.module.css'

import PropTypes from 'prop-types'

/**
 * React component with BarChart (from recharts)
 * Display stats related to weight and burnt calories
 * @param {array} activityData
 * @component
 */
function Activity({ activityData }) {
    console.log(activityData)

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
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="dayIndex" />
                        <YAxis yAxisId="weight" type='number' orientation='right' />
                        <YAxis yAxisId="cal" type='number' orientation='left' hide />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} formatter={(value) => <span className='text-color'>{value}</span>} />
                        <Bar yAxisId="weight" dataKey="kilogram" name='Poids (kg)' fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} />
                        <Bar yAxisId="cal" dataKey="calories" name='Calories brûlées (kCal)' fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

Activity.propTypes = {
    activityData: PropTypes.array.isRequired,
};

export default Activity