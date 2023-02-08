// Base URL of API
const baseUrl = `http://localhost:3000/User/`

/**
 * Fetch data from API http://localhost:3000/User/{id}
 * @param { Number } id
 * @returns {object} UserData
 */
export async function fetchUserData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}

/**
 * Fetch data from API http://localhost:3000/User/{id}/activity
 * @param { Number } id
 * @returns {object} ActivityData
 */
export async function fetchActivityData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}/activity`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}

/**
 * Fetch data from API http://localhost:3000/User/{id}/average-sessions
 * @param { Number } id
 * @returns {object} AverageData
 */
export async function fetchAverageData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}/average-sessions`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}

/**
 * Fetch data from API http://localhost:3000/User/{id}/performance
 * @param { Number } id
 * @returns {object} PerformanceData
 */
export async function fetchPerformanceData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}/performance`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}
