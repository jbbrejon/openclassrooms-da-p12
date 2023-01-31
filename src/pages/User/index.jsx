import Sidebar from '../../components/Sidebar'

// Import CSS module
import styles from '../../styles/User.module.css'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react';

import fetchData from '../../api/fetchData/index.js';

function User() {

    const { id } = useParams();
    const idInt = parseInt(id);
    const [userData, setUserData] = useState({})
    const [isDataLoaded, setDataLoaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getApi() {
            try {
                const data = await fetchData(idInt)
                setUserData(data)
            } catch (err) {
                setError(true)

            } finally {
                setDataLoaded(true)
            }
        }
        getApi()
    }, [idInt])
    console.log(userData)
    return (
        isDataLoaded ? (
            <main className={styles.main}>
                <Sidebar></Sidebar>
                <h1>Bonjour {userData.userInfos.firstName}</h1>
            </main>
        )
            : (
                <main className={styles.main}>
                    <Sidebar></Sidebar>

                </main>)
    )
}

export default User