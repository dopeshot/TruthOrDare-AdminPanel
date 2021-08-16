import { useState } from "react";
import useToken from "../hooks/useToken";
import { Credentials } from "../types/credentials";

export async function loginUser(credentials: Credentials) {
    let response = await fetch(`${process.env.BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    let data = await response.json()

    return data
}

export async function getUserProfile(token: any) {

    let response = await fetch(`${process.env.BASE_URL}/user/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    let data = await response.json()

    return data
}