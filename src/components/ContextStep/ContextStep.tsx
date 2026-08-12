import { useState } from 'react'
import type { ContextQuestion } from '../../data/types'
import styles from './ContextStep.module.css'

interface Props { questions: ContextQuestion[] }

export function ContextStep({ questions }: Props) {
  const [selected, setSelected] = useState<Record<string, string>>({})

  function toggle(qId: string, opt: string) {
    setSelected(prev => ({ ...prev, [qId]: opt }))
  }

  return (
    <div className={styles.wrap}>
      {questions.map(q => (
        <div key={q.id} className={styles.question}>
          <div className={styles.label}>{q.label}</div>
          <div className={styles.chips}>
            {q.options.map(opt => (
              <button
                key={opt}
                className={`${styles.chip} ${selected[q.id] === opt ? styles.sel : ''}`}
                onClick={() => toggle(q.id, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
