/**
 * Class to create object with userData, activityData, averageData, performanceData as constructor (from API)
 * @class
 * @classdesc Return and format data with getters and methods
 */

export default class Data {
    constructor(userData, activityData, averageData, performanceData) {
        this._userData = userData;
        this._activityData = activityData;
        this._averageData = averageData;
        this._performanceData = performanceData;
    }

    // Getters
    // Return firstName 
    get firstName() {
        return this._userData.userInfos.firstName
    }
    // Return todayScore 
    get todayScore() {
        if (this._userData.todayScore === undefined) {
            return this._userData.score
        }
        else {
            return this._userData.todayScore
        }

    }
    // Return calorieCount 
    get calorieCount() {
        return this._userData.keyData.calorieCount
    }
    // Return proteinCount
    get proteinCount() {
        return this._userData.keyData.proteinCount
    }
    // Return carbohydrateCount
    get carbohydrateCount() {
        return this._userData.keyData.carbohydrateCount
    }
    // Return lipidCount
    get lipidCount() {
        return this._userData.keyData.lipidCount
    }
    // Return activityData (formated)
    get activityData() {
        return this.formatActivityData()
    }
    // Return averageData (formated)
    get averageData() {
        return this.formatAverageData()
    }
    // Return performanceData (formated)
    get performanceData() {
        return this.formatPerformanceData()
    }

    // Methods
    // Return array of formated activityData with day index
    formatActivityData() {
        let formatedActivityData = []
        this._activityData.sessions.forEach((element, index) => {
            Object.assign(element, { dayIndex: index + 1 })
            formatedActivityData.push(element)
        });
        return formatedActivityData
    }
    // Return array of formated performanceData with capitalized kind name
    formatPerformanceData() {
        let formatedPerformanceData = []
        this._performanceData.data.forEach((element, index) => {
            let kindName = this._performanceData.kind[index + 1]
            Object.assign(element, { kindName: this.capitalizeWord(kindName) })
            formatedPerformanceData.push(element)
        });
        return formatedPerformanceData.reverse()
    }
    // Return array of formated averageData with first letter of week days
    formatAverageData() {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'S'];
        let formatedAverageData = []
        this._averageData.sessions.forEach((element, index) => {
            Object.assign(element, { dayCap: days[index] })
            formatedAverageData.push(element)
        });
        return formatedAverageData
    }
    // Return capitalized word
    capitalizeWord(word) {
        const firstLetter = word.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord
    }
}