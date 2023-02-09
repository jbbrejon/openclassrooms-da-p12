// Import CSS module
import styles from './Error.module.css'

/**
 * React component
 * Display error 404 message
 * @component
 */
function Error() {

    return (
        <div className={styles.error}> Oups 🙈 Cette page n'existe pas</div>
    )
}

export default Error