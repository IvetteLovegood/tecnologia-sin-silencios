import { useState } from 'react'
import styles from './EvalScale.module.css'

interface Props {
  label: string
  min?: string
  max?: string
  onChange?: (val: number) => void
}

export function EvalScale({
  label,
  min = 'Para nada',
  max = 'Lo tengo claro',
  onChange,
}: Props) {
  const [val, setVal] = useState<number | null>(null)

  function handleClick(n: number) {
    setVal(n)
    onChange?.(n)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.label}>{label}</div>
      <div className={styles.scale}>
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            className={`${styles.btn} ${val === n ? styles.sel : ''}`}
            onClick={() => handleClick(n)}
          >
            {n}
          </button>
        ))}
      </div>
      <div className={styles.exts}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}
