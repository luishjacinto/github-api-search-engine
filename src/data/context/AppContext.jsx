
import { createContext, useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios'
import useNotify from '../hook/useNotify'
import Cookies from "js-cookie";

const AppContext = createContext({})

function fetchGithub(url) {
    return axios.get(url, {
        headers: {
            Authorization: `token ${Cookies.get('sess_cookie')}`
        }
    })
}

function fetchUser(username){
    return fetchGithub(`https://api.github.com/users/${username}`)
}

function fetchRepositories(username){
    return fetchGithub(`https://api.github.com/users/${username}/repos`)
}

function fetchStars(username){
    return fetchGithub(`https://api.github.com/users/${username}/starred`)
}

export function AppProvider(props){
    const { createAlert } = useNotify()

    const [lastUsernameSearched, setLastUsernameSearched] = useState(null)
    const [onSearch, setOnSearch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)
    const [repositoriesData, setRepositoriesData] = useState([])
    const [starsData, setStarsData] = useState([])
    const [userView, setUserView] = useState(null)

    const clearAppData = () => {
        setOnSearch(false)
        setLoading(false)
        setLastUsernameSearched(null)
        setUserData(null)
        setRepositoriesData([])
        setStarsData([])
        setUserView(null)
    }

    function getRepositories(username = null){
        if(!username) {
            if(!lastUsernameSearched)
                return
            else
                username = lastUsernameSearched
        }
        if (!loading)
            setLoading(true)

        setUserView('repos')
        fetchRepositories(username)
            .then(res => {
                setRepositoriesData(res.data)
                setLoading(false)
            })
            .catch(e => {
                clearAppData()
                createAlert(`Erro ao encontrar repositórios de usuário: ${e.message}`, "danger")
            })
    }

    function getStars(username = null){
        if (!loading)
            setLoading(true)

        if(!username) {
            if(!lastUsernameSearched)
                return
            else
                username = lastUsernameSearched
        }

        setUserView('stars')
        fetchStars(username)
            .then(res => {
                setStarsData(res.data)
                setLoading(false)
            })
            .catch(e => {
                clearAppData()
                createAlert(`Erro ao encontrar stars de usuário: ${e.message}`, "danger")
            })
    }

    function getUser(username) {
        const searchHasNotStartedOrTryingToSearchAnotherUser = (!lastUsernameSearched || lastUsernameSearched !== username)

        if (username && searchHasNotStartedOrTryingToSearchAnotherUser){
            setLastUsernameSearched(username)
            setOnSearch(true);
            setLoading(true);
            setRepositoriesData(null)
            setStarsData(null)

            fetchUser(username)
                .then(res => {
                    setUserData(res.data)
                    getRepositories(username)
                }).catch(e => {
                    clearAppData()
                    createAlert(`Erro ao encontrar usuário: ${e.message}`, "danger")
                })

        } else {
            clearAppData()

            if (!username)
                createAlert("Informe um nome de usuário a ser pesquisado!")
        }
    }

    const value = {
        onSearch,
        loading,
        getUser,
        getRepositories,
        getStars,
        userData,
        repositoriesData,
        starsData,
        userView
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext