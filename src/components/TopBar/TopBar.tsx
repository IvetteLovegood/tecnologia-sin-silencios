import styles from './TopBar.module.css'

interface Props {
  step: number
  total: number
  caminoLabel: string
  caminoClass: string
  onBack: () => void
  onHome: () => void
  onMentoria: () => void
}

export function TopBar({ step, total, caminoLabel, caminoClass, onBack, onHome, onMentoria }: Props) {
  if (step === 0) return null

  return (
    <nav className={styles.bar}>
      <button className={styles.homeBtn} onClick={onHome} aria-label="Ir al inicio" title="Ir al inicio">
        ⌂
      </button>
      <span className={`${styles.camino} ${styles[caminoClass]}`}>{caminoLabel}</span>
      <div className={styles.track}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`${styles.pip} ${i < step ? styles.done : i === step ? styles.now : ''}`}
          />
        ))}
      </div>
      <span className={styles.num}>{step} / {total}</span>
      {step > 1 && (
        <button className={styles.back} onClick={onBack}>
          ← volver
        </button>
      )}
      <button className={styles.mentoriaBtn} onClick={onMentoria} title="Solicitar mentoría">
        💬 <span>Mentoría</span>
      </button>
    </nav>
  )
}
