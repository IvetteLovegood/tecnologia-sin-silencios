import styles from './MentoriaCTA.module.css'

interface Props {
  ctaTxt: string
  onSolicitar: () => void
}

export function MentoriaCTA({ ctaTxt, onSolicitar }: Props) {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>¿Quieres hablar con alguien?</h3>
      <p className={styles.desc}>{ctaTxt}</p>
      <p className={styles.note}>30–45 min · sin costo · confidencial</p>
      <button className={styles.btn} onClick={onSolicitar}>
        Solicitar mentoría →
      </button>
    </div>
  )
}
