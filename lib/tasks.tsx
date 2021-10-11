export async function fetchTasksList(limit: number = 5, page: number = 0) {
    const response = await fetch(`${process.env.BASE_URL}/task?limit=${limit}&page=${page}`)
    const data = await response.json()

    return data
}