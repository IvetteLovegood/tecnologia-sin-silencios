import styles from './SolidarityBanner.module.css'

interface Props {
  message?: string
}

export function SolidarityBanner({ message }: Props) {
  const text = message ?? 'No estás sola. Muchas personas en tech han vivido algo parecido y tampoco tuvieron palabras para nombrarlo al principio.'
  return (
    <div className={styles.banner}>
      <span className={styles.icon}>💜</span>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
