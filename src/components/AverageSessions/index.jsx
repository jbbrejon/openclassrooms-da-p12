// Recharts 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';


// Import styles
import styles from '../../styles/AverageSessions.module.css'

import PropTypes from 'prop-types'

function AverageSessions({ averageData }) {
    console.log(averageData)
    return (
        <>
            <div className={styles.statbox}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={averageData}
                        margin={{
                            top: 50,
                            right: 10,
                            left: 10,
                            bottom: 5,
                        }}
                        style={{ backgroundColor: 'red' }}
                    >
                        <XAxis
                            dataKey="dayCap"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: '10px', fill: 'white' }}
                            dy={10}
                        />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="white"
                            strokeWidth={2}
                            dot={false}
                        />
                        <text
                            x="20"
                            y="20"
                            textAnchor="start"
                            dominantBaseline="hanging"
                            className={styles.title}
                            fill="white"
                        >
                            Durée moyenne des sessions
                        </text>

                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

AverageSessions.propTypes = {
    averageData: PropTypes.array.isRequired,
};

export default AverageSessions
