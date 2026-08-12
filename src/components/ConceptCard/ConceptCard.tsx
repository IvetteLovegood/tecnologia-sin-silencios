import styles from './ConceptCard.module.css'

interface Props {
  file: string
  def: string
  exp: string
  ejLabel: string
  ej: string
  variant?: 1 | 2
}

export function ConceptCard({ file, def, exp, ejLabel, ej, variant = 1 }: Props) {
  return (
    <div className={`${styles.card} ${variant === 2 ? styles.v2 : ''}`}>
      <div className={styles.bar}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>
      <div className={styles.file}>{file}</div>
      <div className={styles.def}>{def}</div>
      <div
        className={styles.exp}
        dangerouslySetInnerHTML={{ __html: exp.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
      />
      <div className={styles.ej}>
        <div className={styles.ejLabel}>{ejLabel}</div>
        <div className={styles.ejTxt}>{ej}</div>
      </div>
    </div>
  )
}
