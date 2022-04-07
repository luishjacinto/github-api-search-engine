import { useEffect } from 'react'
import Main from "../../components/Main";
import AppAlert from "../../components/AppAlert";
import useAppData from "../../data/hook/useAppData";
import { useRouter } from "next/router";
import Head from 'next/head'

function Page() {

    const { getUser } = useAppData()
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady)
            return

        const { username } = router.query
        if (!username)
            return

        getUser(username);
    }, [router.isReady])

    return (
        <>
            <Head>
                <title>GitHub - API Search Engine</title>
            </Head>
            <Main />
            <AppAlert />
        </>
    )
}

export default Page;
