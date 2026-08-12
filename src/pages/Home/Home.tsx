import type { Camino } from '../../data/types'
import { PrivacyNote } from '../../components/PrivacyNote/PrivacyNote'
import styles from './Home.module.css'

interface Props {
  onSelect: (c: Camino) => void
}

export function Home({ onSelect }: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.content}>
        <div className={styles.tagTop}>
          <span className={styles.liveDot} />
          Para personas en TI
        </div>
        <div className={styles.codeTag}>// herramienta de mentoría feminista</div>
        <h1 className={styles.title}>
          Tecnología<br />
          <span>sin silencios</span>
        </h1>
        <p className={styles.sub}>
          Una guía para cuando algo no cuadra en tu carrera o en tu trabajo en tech,
          y no sabes bien cómo nombrarlo.
        </p>

        <PrivacyNote variant="banner" />

        <div className={styles.rutas}>
          <button className={`${styles.ruta} ${styles.principal}`} onClick={() => onSelect('est')}>
            <span className={`${styles.badge} ${styles.badgePri}`}>Camino principal</span>
            <div className={styles.rutaIco}>🎓</div>
            <div className={styles.rutaTitle}>Soy estudiante</div>
            <div className={styles.rutaDesc}>
              Carrera tech, bootcamp, primer internship, proyecto escolar, hackathon.
            </div>
            <div className={styles.rutaCta}>Empezar →</div>
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

        <p className={styles.note}>~12 minutos · sin registro · sin datos guardados · 100% confidencial</p>
      </div>
    </div>
  )
}
