import { useEffect, useState } from "react"
import { getUserProfile } from "../lib/auth"
import useToken from "./useToken"

const useUser = () => {
    const {token, setToken} = useToken()
    const [user, setUser]: any = useState()

    useEffect(() => {
        const getUser = async () => {
            const user = await getUserProfile(token)
            setUser(user)
        }
        getUser()
    }, [])

    return user
}

export default useUser