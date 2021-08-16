import { useState } from "react"
import { UserToken } from "../types/userToken"

const useToken = () => {
    let tokenString: string | null

    const getToken = () => {
        if (typeof window !== 'undefined')
            tokenString = localStorage.getItem('access_token')
        const userToken = tokenString
        return userToken
    }
    
    const [token, setToken] = useState(getToken())

    const saveToken = (userToken: UserToken) => {
        localStorage.setItem('access_token', userToken.access_token)
        setToken(userToken.access_token)
    }

    return {
        setToken: saveToken,
        token
    }
}

export default useToken