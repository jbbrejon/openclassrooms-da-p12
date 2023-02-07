export default class Data {
    constructor(userData, activityData, averageData, performanceData) {
        this._userData = userData;
        this._activityData = activityData;
        this._averageData = averageData;
        this._performanceData = performanceData;
    }

    // Getters
    get firstName() {
        return this._userData.userInfos.firstName
    }
    get todayScore() {
        return this._userData.todayScore
    }
    get calorieCount() {
        return this._userData.keyData.calorieCount
    }
    get proteinCount() {
        return this._userData.keyData.proteinCount
    }
    get carbohydrateCount() {
        return this._userData.keyData.carbohydrateCount
    }
    get lipidCount() {
        return this._userData.keyData.lipidCount
    }
    get activityData() {
        return this.formatActivityData()
    }
    get averageData() {
        return this.formatAverageData()
    }
    get performanceData() {
        return this.formatPerformanceData()
    }
    // Methods
    formatActivityData() {
        let formatedActivityData = []
        this._activityData.sessions.forEach((element, index) => {
            Object.assign(element, { dayIndex: index + 1 })
            formatedActivityData.push(element)
        });
        return formatedActivityData
    }
    formatPerformanceData() {
        let formatedPerformanceData = []
        this._performanceData.data.forEach((element, index) => {
            let kindName = this._performanceData.kind[index + 1]
            Object.assign(element, { kindName: this.capitalizeWord(kindName) })
            formatedPerformanceData.push(element)
        });
        return formatedPerformanceData.reverse()
    }
    formatAverageData() {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'S'];
        let formatedAverageData = []
        this._averageData.sessions.forEach((element, index) => {
            Object.assign(element, { dayCap: days[index] })
            formatedAverageData.push(element)
        });
        return formatedAverageData
    }
    capitalizeWord(word) {
        const firstLetter = word.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord
    }
}