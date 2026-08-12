import { useState } from 'react'
import styles from './YesNoQuestion.module.css'

interface Props {
  question: string
  yesLabel?: string
  noLabel?: string
  maybeLabel?: string
  onChange?: (val: 'si' | 'no' | 'tal_vez') => void
}

export function YesNoQuestion({
  question,
  yesLabel = 'Sí, me pasó',
  noLabel = 'No, no creo',
  maybeLabel = 'Más o menos',
  onChange,
}: Props) {
  const [sel, setSel] = useState<'si' | 'no' | 'tal_vez' | null>(null)

  function handle(v: 'si' | 'no' | 'tal_vez') {
    setSel(v)
    onChange?.(v)
  }

  const opts: { val: 'si' | 'no' | 'tal_vez'; label: string; ico: string }[] = [
    { val: 'si', label: yesLabel, ico: '✓' },
    { val: 'tal_vez', label: maybeLabel, ico: '~' },
    { val: 'no', label: noLabel, ico: '✗' },
  ]

  return (
    <div className={styles.wrap}>
      <div className={styles.question}>{question}</div>
      <div className={styles.options}>
        {opts.map(o => (
          <button
            key={o.val}
            className={`${styles.opt} ${sel === o.val ? styles[`sel_${o.val}`] : ''}`}
            onClick={() => handle(o.val)}
          >
            <span className={styles.ico}>{o.ico}</span>
            <span className={styles.lbl}>{o.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
