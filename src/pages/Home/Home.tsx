import { useState } from 'react'
import type { Camino } from '../../data/types'
import { PrivacyNote } from '../../components/PrivacyNote/PrivacyNote'
import styles from './Home.module.css'

interface Props {
  onSelect: (c: Camino) => void
}

export function Home({ onSelect }: Props) {
  const [subEst, setSubEst] = useState(false)

  if (subEst) return (
    <div className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.content}>
        <button className={styles.backLink} onClick={() => setSubEst(false)}>
          ← Volver
        </button>
        <div className={styles.codeTag}>// soy estudiante</div>
        <h2 className={styles.subTitle}>¿En qué momento estás?</h2>
        <p className={styles.sub} style={{ marginTop: 8 }}>
          Elige el camino que mejor describe dónde estás ahora.
        </p>
        <div className={styles.rutas} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <button className={`${styles.ruta} ${styles.principal}`} onClick={() => onSelect('est')}>
            <span className={`${styles.badge} ${styles.badgePri}`}>Universidad · Bootcamp</span>
            <div className={styles.rutaIco}>🎓</div>
            <div className={styles.rutaTitle}>Ya estoy en la carrera</div>
            <div className={styles.rutaDesc}>
              Universidad, bootcamp, primer internship, proyecto escolar, hackathon.
            </div>
            <div className={styles.rutaCta}>Empezar →</div>
          </button>

          <button className={`${styles.ruta} ${styles.rutaPrepa}`} onClick={() => onSelect('prepa')}>
            <span className={`${styles.badge} ${styles.badgePrepa}`}>Secundaria · Preparatoria</span>
            <div className={styles.rutaIco}>📚</div>
            <div className={styles.rutaTitle}>Todavía eligiendo</div>
            <div className={styles.rutaDesc}>
              Estoy en secundaria o prepa y explorando si tech es para mí.
            </div>
            <div className={`${styles.rutaCta} ${styles.rutaCtaPrepa}`}>Empezar →</div>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.content}>
        <div className={styles.tagTop}>
          <span className={styles.liveDot} />
          Para mujeres interesadas en tech
        </div>
        <div className={styles.codeTag}>// herramienta de mentoría feminista</div>
        <h1 className={styles.title}>
          Tecnología<br />
          <span>sin silencios</span>
        </h1>
        <p className={styles.sub}>
          Una guía para cuando vives algo incómodo en tu escuela, tu carrera
          o tu trabajo en tech, y no sabes cómo explicarlo. Para que puedas
          entrar o quedarte en tech con más claridad y sin dudar de ti misma.
        </p>

        <div className={styles.rutas}>
          <button className={`${styles.ruta} ${styles.principal}`} onClick={() => setSubEst(true)}>
            <span className={`${styles.badge} ${styles.badgePri}`}>Camino principal</span>
            <div className={styles.rutaIco}>🎓</div>
            <div className={styles.rutaTitle}>Soy estudiante</div>
            <div className={styles.rutaDesc}>
              Secundaria, prepa, carrera tech, bootcamp, primer internship.
            </div>
            <div className={styles.rutaCta}>Ver opciones →</div>
          </button>

          <button className={styles.ruta} onClick={() => onSelect('pro')}>
            <span className={`${styles.badge} ${styles.badgeSec}`}>También disponible</span>
            <div className={styles.rutaIco}>💻</div>
            <div className={styles.rutaTitle}>Ya trabajo en tech</div>
            <div className={styles.rutaDesc}>
              Equipo de desarrollo, primer empleo, trabajo remoto, empresa.
            </div>
            <div className={`${styles.rutaCta} ${styles.rutaCtaSec}`}>Empezar →</div>
          </button>
        </div>

        <PrivacyNote variant="banner" />
        <p className={styles.note}>~7 minutos · sin registro · 100% confidencial</p>
      </div>
    </div>
  )
}
