import type { Ruta } from '../../data/types'
import styles from './ActionCard.module.css'

interface Props { rutas: Ruta[] }

export function ActionCard({ rutas }: Props) {
  return (
    <div>
      {rutas.map((r, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.num}>{i + 1}</div>
          <div>
            <div className={styles.title}>{r.t}</div>
            <div className={styles.desc}>{r.d}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
