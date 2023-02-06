// Recharts 
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



// Import styles
import styles from '../../styles/Performance.module.css'

import PropTypes from 'prop-types'

function Performance({ performanceData }) {
    console.log(performanceData)
    return (
        <>
            <div className={styles.statbox}>


                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="65%"
                        data={performanceData}
                        style={{ backgroundColor: '#282D30' }}
                    >
                        <PolarGrid stroke="white" />
                        <PolarAngleAxis
                            stroke="white"
                            dataKey="kindName"
                            tick={{ fontSize: '10px' }}
                            tickLine={false}
                        />
                        <Radar
                            name="Performance"
                            dataKey="value"
                            stroke="#e60000"
                            fill="#e60000"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

Performance.propTypes = {
    performanceData: PropTypes.array.isRequired,
};

export default Performance