import styles from '../components/navbar.module.css'

export default function Navlayout({ children }) {
    return <nav className={styles.navigation}>{children}</nav>
}