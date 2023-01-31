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
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getApi() {
            setDataLoading(true)
            try {
                const data = await fetchData(idInt)
                setUserData(data)
            } catch (err) {
                setError(true)

            } finally {
                setDataLoading(false)
            }
        }
        getApi()
    }, [idInt])
    console.log(userData)
    return (
        <main className={styles.main}>
            <Sidebar></Sidebar>
            <div>Bonjour {userData.userInfos.firstName}  </div>
        </main>
    )
}

export default User