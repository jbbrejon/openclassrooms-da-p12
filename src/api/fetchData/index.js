
export default async function fetchData(id) {
    const baseUrl = "http://localhost:3000/"
    try {
        const response = await fetch(`${baseUrl}User/${id}`)
        const { data } = await response.json()
        return data
    } catch (err) {

        return `Error: ${err}`
    }
}
