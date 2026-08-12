import { useState } from 'react'
import type { BarreraCard } from '../../data/types'
import { InfoModal } from '../InfoModal/InfoModal'
import styles from './BiasGrid.module.css'

interface Props { biases: BarreraCard[] }

export function BiasGrid({ biases }: Props) {
  const [abierta, setAbierta] = useState<BarreraCard | null>(null)

  return (
    <>
      <div className={styles.grid}>
        {biases.map((b, i) => (
          <button
            key={i}
            className={styles.card}
            onClick={() => setAbierta(b)}
            aria-label={`Más sobre ${b.name}`}
          >
            <div className={styles.ico}>{b.ico}</div>
            <div className={styles.name}>{b.name}</div>
            <div className={styles.sub}>{b.sub}</div>
            <div className={styles.verMas}>Ver más →</div>
          </button>
        ))}
      </div>

      {abierta && (
        <InfoModal
          ico={abierta.ico}
          titulo={abierta.name}
          secciones={[
            { label: '¿Qué es?', texto: abierta.detalle.que },
            { label: 'Cómo se ve en tech', texto: abierta.detalle.ejemplo },
            { label: 'Señal de que está pasando', texto: abierta.detalle.senal },
          ]}
          onClose={() => setAbierta(null)}
        />
      )}
    </>
  )
}
