import styles from '../components/contactcontainer.module.css'

export default function ContactContainer({ children }) {
    return <div className={styles.contactcontainer}>{children}</div>
}