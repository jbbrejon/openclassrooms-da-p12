// Import modules 
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

// Import CSS module
import styles from './Performance.module.css'

/**
 * React component with RadarChart (from recharts)
 * Display stats related to cardio, energy, endurance, strength, speed, intensity performances
 * @param {array} performanceData
 * @component
 */
function Performance({ performanceData }) {
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

// PropTypes definition
Performance.propTypes = {
    performanceData: PropTypes.array.isRequired,
};

export default Performance