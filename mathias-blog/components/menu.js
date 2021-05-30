import styles from '../components/menu.module.css'

export default function Navlayout({ children }) {
    return <nav className={styles.menu}>{children}</nav>
}