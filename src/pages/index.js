import Main from "../components/Main";
import AppAlert from "../components/AppAlert";
import Head from 'next/head'

function Page() {
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
