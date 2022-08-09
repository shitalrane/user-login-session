import Head from 'next/head'
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar'
import Feedback from '../Components/Feedback';
import { getUser } from '../Commons/utils.js'
import { useRouter } from 'next/router'

const Profile = () => {

    const router = useRouter()
    const user = getUser()

    if (!user) {
        console.log("logging out no user")
        Cookies.remove(user)
        router.push('login')
        return
    }

    console.log(user)
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar user={user} />
            <main >
                <Feedback style={{margin: "0 auto"}} user={user} />
            </main>
        </div>
    )
}

export default Profile;



