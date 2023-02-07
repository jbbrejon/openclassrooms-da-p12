/**
 * Fetch data from API
 * @param { Number } id
 */

const baseUrl = `http://localhost:3000/User/`

export async function fetchUserData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}

export async function fetchActivityData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}/activity`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}

export async function fetchAverageData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}/average-sessions`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}

export async function fetchPerformanceData(id) {
    try {
        const response = await fetch(`${baseUrl}${id}/performance`)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}
