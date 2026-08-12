import { useEffect } from 'react'
import styles from './InfoModal.module.css'

interface Props {
  ico?: string
  titulo: string
  secciones: { label: string; texto: string }[]
  onClose: () => void
}

export function InfoModal({ ico, titulo, secciones, onClose }: Props) {
  // Cerrar con Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className={styles.overlay}
      onClick={e => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
    >
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">✕</button>

        <div className={styles.header}>
          {ico && <span className={styles.ico}>{ico}</span>}
          <h3 className={styles.titulo}>{titulo}</h3>
        </div>

        <div className={styles.body}>
          {secciones.map((s, i) => (
            <div key={i} className={styles.seccion}>
              <div className={styles.seccionLabel}>{s.label}</div>
              <p className={styles.seccionTxt}>{s.texto}</p>
            </div>
          ))}
        </div>

        <button className={styles.btnCerrar} onClick={onClose}>
          Entendido →
        </button>
      </div>
    </div>
  )
}
