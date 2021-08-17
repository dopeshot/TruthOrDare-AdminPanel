export async function fetchTasksList() {
    let response = await fetch(`${process.env.BASE_URL}/task?limit=99999`)
    let data = await response.json()

    return data
}