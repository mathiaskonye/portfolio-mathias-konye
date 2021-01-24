import styles from '../components/heroabout.module.css'

export default function HeroAbout({ children }) {
    return <div className={styles.heroabout}>{children}</div>
}