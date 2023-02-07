// Recharts 
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, Rectangle } from 'recharts';


// Import styles
import styles from './AverageSessions.module.css'

import PropTypes from 'prop-types'

/**
 * React component with LineChart (from recharts)
 * Display stats related to sessions length
 * @param {array} averageData
 * @component
 */
function AverageSessions({ averageData }) {
    //Custom tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p className="label">{payload[0].value} min</p>
                </div>
            );
        }

        return null;
    };

    //Custom cursor
    function Cursor({ points }) {
        return (
            <Rectangle
                fill="black"
                opacity={0.1}
                x={points[1].x}
                width={500}
                height={300}
            />
        );
    }
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
                        <Tooltip cursor={<Cursor />} content={<CustomTooltip />} />
                        onMouseMove={(e) => { }}
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
