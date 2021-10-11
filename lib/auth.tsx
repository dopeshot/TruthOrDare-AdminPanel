import { Credentials } from "../types/credentials";

export async function loginUser(credentials: Credentials) {
    const response = await fetch(`${process.env.BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    const data = await response.json()

    return data
}

export async function getUserProfile(token: any) {
    const response = await fetch(`${process.env.BASE_URL}/user/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()

    return data
}