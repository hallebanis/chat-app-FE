import { useState } from 'react'
import toast from 'react-hot-toast'
import { userAuthContext } from '../context/AuthContext'

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = userAuthContext()

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = checkInputs({ fullName, username, password, confirmPassword, gender })
        if (!success) {
            return false
        }
        setLoading(true)
        let status = 'ok'
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.Error)
            }
            localStorage.setItem('chat-user', JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message || 'something went wrong')
            status = 'ko'
        } finally {
            setLoading(false)
            return { status }
        }
    }
    return ({
        loading,
        signup

    }
    )
}

export default useSignup

const checkInputs = ({ fullName, username, password, confirmPassword, gender }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('please fill all fields!')
        return
    }
    if (password.length < 6) {
        toast.error('password must be at least six caracters')
        return
    }
    if (password !== confirmPassword) {
        toast.error('password do not match')
        return
    }
    return true
}