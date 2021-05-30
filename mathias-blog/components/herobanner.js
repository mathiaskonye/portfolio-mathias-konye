import styles from '../components/herobanner.module.css'

export default function Herobanner({ children }) {
    return <div className={styles.herobanner}>{children}</div>
}