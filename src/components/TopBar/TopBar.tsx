import styles from './TopBar.module.css'

interface Props {
  step: number
  total: number
  caminoLabel: string
  caminoClass: string
  onBack: () => void
}

export function TopBar({ step, total, caminoLabel, caminoClass, onBack }: Props) {
  if (step === 0) return null

  return (
    <nav className={styles.bar}>
      <span className={styles.logo}>TSS</span>
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
    </nav>
  )
}
