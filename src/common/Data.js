export default class Data {
    constructor(userData, activityData, averageData, performanceData) {
        this._userData = userData;
        this._activityData = activityData;
        this._averageData = averageData;
        this._performanceData = performanceData;
    }

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
        return this._activityData.sessions
    }

    get averageData() {
        return this._averageData.sessions
    }

    get performanceData() {
        return this._performanceData
    }
}