import styles from '../components/ctabtn.module.css'

export default function Ctabtn({ children }) {
    return <button className={styles.ctabtn}>{children}</button>
}