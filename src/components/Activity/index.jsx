import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import styles from '../../styles/Activity.module.css'

import PropTypes from 'prop-types'

function Activity({ activityData }) {
    console.log(activityData)
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
                        <Tooltip />
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