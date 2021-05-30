import styles from '../components/ghostbtn.module.css'

export default function Ghostbtn({ children }) {
    return <button className={styles.ghostbtn}>{children}</button>
}