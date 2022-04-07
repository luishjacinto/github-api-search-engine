
import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import useNotify from "../hook/useNotify";

const AuthContext = createContext({})

export function AuthProvider(props){
    const router = useRouter()
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    const { createAlert } = useNotify()

    useEffect(() => {
        try {
            if (!router.isReady)
                return

            const { access_token, error_description } = router.query

            if (error_description)
                throw new Error(error_description)

            if (access_token || Cookies.get('sess_cookie')) {

                setLoggedIn(true)
                if (access_token) {
                    Cookies.set('sess_cookie', access_token)
                    router.push('/', undefined, { shallow: true })
                    createAlert('Autenticado com sucesso!', 'success')
                }

            }

        } catch (e) {
            Cookies.remove('sess_cookie')
            createAlert(e.message, "danger")

        } finally {
            setLoading(false)
        }

    }, [router.isReady])

    return (
        <AuthContext.Provider value={{
            loggedIn,
            loading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext