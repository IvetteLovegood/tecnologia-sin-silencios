import { useState } from 'react'
import type { QuestionItem } from '../../data/types'
import { InfoModal } from '../InfoModal/InfoModal'
import styles from './QuestionList.module.css'

interface Props {
  // Acepta QuestionItem[] (con detalle) o string[] (sin detalle, compatibilidad)
  questions: QuestionItem[] | string[]
}

function normalizar(qs: QuestionItem[] | string[]): QuestionItem[] {
  return qs.map(q => typeof q === 'string' ? { texto: q } : q)
}

export function QuestionList({ questions }: Props) {
  const [abierta, setAbierta] = useState<QuestionItem | null>(null)
  const items = normalizar(questions)

  return (
    <>
      <div className={styles.list}>
        {items.map((q, i) => (
          <div key={i} className={`${styles.item} ${q.detalle ? styles.clickable : ''}`}>
            <span className={styles.arrow}>→</span>
            <span className={styles.texto}>{q.texto}</span>
            {q.detalle && (
              <button
                className={styles.masBtn}
                onClick={() => setAbierta(q)}
                aria-label="Más información"
              >
                ¿Qué es esto?
              </button>
            )}
          </div>
        ))}
      </div>

      {abierta?.detalle && (
        <InfoModal
          titulo={abierta.detalle.titulo}
          secciones={[
            { label: '¿A qué se refiere?', texto: abierta.detalle.explicacion },
            { label: 'Ejemplo concreto', texto: abierta.detalle.ejemplo },
          ]}
          onClose={() => setAbierta(null)}
        />
      )}
    </>
  )
}
