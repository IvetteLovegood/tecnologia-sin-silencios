import { useState } from 'react'
import type { CaminoData, Camino, UserResponses } from '../../data/types'
import { derivarPerfil, adaptacionParaPerfil } from '../../data/adaptive'
import { EvalScale } from '../../components/EvalScale/EvalScale'
import { MentoriaCTA } from '../../components/MentoriaCTA/MentoriaCTA'
import { MentoriaModal } from '../../components/MentoriaModal/MentoriaModal'
import { PrivacyNote } from '../../components/PrivacyNote/PrivacyNote'
import styles from './Result.module.css'

interface Props {
  data: CaminoData
  camino: Camino
  responses: UserResponses
  onReset: () => void
}

export function Result({ data, camino, responses, onReset }: Props) {
  const [modalAbierto, setModalAbierto] = useState(false)

  const perfil = derivarPerfil(responses)
  const adaptacion = adaptacionParaPerfil(perfil, camino)

  const hallazgos = [
    'Reconocer cuándo algo en tu entorno no está bien, más allá de un malentendido',
    responses.m2EsEstructural !== false
      ? 'La diferencia entre algo que depende de ti y algo que depende de cómo está organizado el espacio'
      : 'Que no siempre es fácil ver si algo es individual o colectivo — y que esa duda también tiene sentido',
    responses.m3SeIdentifica
      ? 'Las dinámicas invisibles que hacen que ciertas personas tengan que demostrar más para ser tomadas en serio'
      : 'Que existen dinámicas en tech que no siempre son visibles a primera vista',
    'Por qué a veces no encontramos palabras para explicar lo que nos pasó',
    responses.mitoGenio
      ? 'Que la idea de que hay personas "naturalmente buenas" para tech es un mito que afecta a muchas personas'
      : 'El mito del genio científico y sus efectos en los espacios de tech',
    data.resRutasLabel,
  ]

  return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>Al terminar</p>
      <h2 className={styles.title}>Lo que recorriste hoy</h2>

      <div className={`${styles.resHero} ${adaptacion.ctaUrgente ? styles.resHeroUrgente : ''}`}>
        <div className={styles.resTitle}>Recorrido completo ✓</div>
        <p className={styles.resSub}>{adaptacion.mensajeApertura}</p>
      </div>

      {/* CTA con modal integrado */}
      {(adaptacion.ctaUrgente || responses.quiereMentoria) ? (
        <div className={styles.ctaUrgente}>
          <div className={styles.ctaUrgenteTitle}>💬 Hay una ruta directa para ti</div>
          <p className={styles.ctaUrgenteDesc}>
            Basado en lo que recorriste hoy, una conversación personalizada podría ayudarte más que seguir explorando sola. La mentoría es breve, confidencial y sin costo.
          </p>
          <MentoriaCTA ctaTxt={data.ctaTxt} onSolicitar={() => setModalAbierto(true)} />
        </div>
      ) : (
        <MentoriaCTA ctaTxt={data.ctaTxt} onSolicitar={() => setModalAbierto(true)} />
      )}

      <div className={styles.hallazgos}>
        <div className={styles.hTitle}>Lo que exploraste</div>
        {hallazgos.map((txt, i) => (
          <div key={i} className={styles.hItem}>
            <div className={styles.hDot} />
            {txt}
          </div>
        ))}
      </div>

      <div className={styles.mentitoBox}>
        <div className={styles.mentitoTitle}>💜 Una cosa antes de irte</div>
        <p className={styles.mentitoTxt}>
          Lo que viviste no es un problema tuyo de actitud ni de capacidad.
          Las dificultades que enfrentan muchas personas en tech tienen que ver con cómo
          están organizados esos espacios — no con quiénes son ellas.
          Nombrar lo que pasa es el primer paso para cambiarlo.
        </p>
      </div>

      <EvalScale
        label="Ahora que terminaste, ¿qué tan claro te resulta identificar cuándo algo en tu entorno no está bien?"
        min="Sigue confuso"
        max="Mucho más claro"
        onChange={v => {/* podría guardarse en responses si se necesita */ void v}}
      />

      {/* Nota de privacidad específica para el formulario */}
      <div className={styles.privacyMentoria}>
        <span className={styles.privacyIco}>🔒</span>
        <span className={styles.privacyTxt}>
          Si solicitas mentoría, puedes elegir qué información compartir.
          La sesión es confidencial — lo que conversemos se queda entre nosotras.
        </span>
      </div>

      <div style={{ textAlign: 'center', marginTop: 28 }}>
        <button className={styles.btnReset} onClick={onReset}>← Volver al inicio</button>
      </div>

      {/* Modal de solicitud */}
      {modalAbierto && (
        <MentoriaModal
          camino={camino}
          responses={responses}
          onClose={() => setModalAbierto(false)}
        />
      )}
    </div>
  )
}
