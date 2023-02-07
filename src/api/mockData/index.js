import Data from "../../classes/Data"

import { dataUser, dataActivity, dataAverage, dataPerformance } from '../../data/userDataMock'

/**
 * Mock (API data)
 * @return { Object } instance of Data class
 */
export default function mockData() {
    let userData = dataUser.data
    let activityData = dataActivity.data
    let averageData = dataAverage.data
    let performance = dataPerformance.data
    let myData = new Data(userData, activityData, averageData, performance)
    return myData
}