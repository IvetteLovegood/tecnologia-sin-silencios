import styles from './PrivacyNote.module.css'

interface Props {
  variant?: 'inline' | 'banner'
}

export function PrivacyNote({ variant = 'inline' }: Props) {
  if (variant === 'banner') {
    return (
      <div className={styles.banner}>
        <span className={styles.icon}>🔒</span>
        <div className={styles.bannerContent}>
          <span className={styles.bannerTitle}>Espacio seguro y confidencial</span>
          <span className={styles.bannerText}>
            No guardamos ningún dato personal. Lo que respondas existe solo en tu navegador
            durante esta sesión — al cerrar la pestaña desaparece por completo.
            Esta guía no te identifica, no te rastrea y no comparte tu información con nadie.
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.inline}>
      <span className={styles.icon}>🔒</span>
      <span className={styles.text}>
        Tus respuestas son privadas. No se guardan, no se envían a ningún lugar
        y desaparecen al cerrar esta pestaña.
      </span>
    </div>
  )
}
