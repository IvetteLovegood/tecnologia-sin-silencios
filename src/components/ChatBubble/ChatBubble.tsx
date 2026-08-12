import type { ChatMsg } from '../../data/types'
import styles from './ChatBubble.module.css'

interface Props {
  icon: string
  name: string
  messages: ChatMsg[]
  tag?: string
}

export function ChatBubble({ icon, name, messages, tag = 'Situación que quizás reconoces' }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.name} dangerouslySetInnerHTML={{ __html: name }} />
        <span className={styles.tag}>{tag}</span>
      </div>
      {messages.map((m, i) =>
        m.gap ? (
          <div key={i} className={styles.gap}>{m.txt}</div>
        ) : (
          <div key={i} className={styles.msg}>
            <div className={`${styles.av} ${styles[m.av]}`}>{m.ini}</div>
            <div>
              <div className={styles.who}>
                {m.who}<span className={styles.ts}>{m.ts}</span>
              </div>
              <div className={styles.text}>{m.txt}</div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
