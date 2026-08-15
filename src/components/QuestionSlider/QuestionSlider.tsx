import { useState } from 'react'
import type { QuestionItem } from '../../data/types'
import { InfoModal } from '../InfoModal/InfoModal'
import styles from './QuestionSlider.module.css'

interface Props {
  label?: string
  questions: QuestionItem[] | string[]
}

function normalizar(qs: QuestionItem[] | string[]): QuestionItem[] {
  return qs.map(q => typeof q === 'string' ? { texto: q } : q)
}

export function QuestionSlider({ label, questions }: Props) {
  const items = normalizar(questions)
  const [idx, setIdx] = useState(0)
  const [abierta, setAbierta] = useState<QuestionItem | null>(null)
  const [visitados, setVisitados] = useState<Set<number>>(new Set([0]))

  const current = items[idx]
  const total = items.length

  function goTo(i: number) {
    setIdx(i)
    setVisitados(prev => new Set([...prev, i]))
  }

  return (
    <>
      <div className={styles.wrap}>
        {label && <div className={styles.label}>{label}</div>}

        <div className={styles.card}>
          <div className={styles.counter}>{idx + 1} de {total}</div>
          <p className={styles.pregunta}>{current.texto}</p>
          {current.detalle && (
            <button
              className={styles.masBtn}
              onClick={() => setAbierta(current)}
            >
              ¿Qué es esto?
            </button>
          )}
        </div>

        <div className={styles.nav}>
          <button
            className={styles.navBtn}
            onClick={() => goTo(idx - 1)}
            disabled={idx === 0}
            aria-label="Anterior"
          >
            ←
          </button>

          <div className={styles.dots}>
            {items.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === idx ? styles.dotActive : ''} ${visitados.has(i) && i !== idx ? styles.dotVisited : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Pregunta ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.navBtn}
            onClick={() => goTo(idx + 1)}
            disabled={idx === total - 1}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
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
