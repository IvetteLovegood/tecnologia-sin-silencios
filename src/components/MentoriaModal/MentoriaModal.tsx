import { useEffect, useState } from 'react'
import type { UserResponses, MentoriaFormData } from '../../data/types'
import { derivarPerfil } from '../../data/adaptive'
import { enviarSolicitudMentoria, resumirRespuestas } from '../../data/sendMentoria'
import styles from './MentoriaModal.module.css'

interface Props {
  camino: 'est' | 'pro' | 'prepa'
  responses: UserResponses
  onClose: () => void
}

type Paso = 'consentimiento' | 'formulario' | 'enviando' | 'exito' | 'error'

export function MentoriaModal({ camino, responses, onClose }: Props) {
  useEffect(() => {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [])

  const [paso, setPaso] = useState<Paso>('consentimiento')
  const [compartir, setCompartir] = useState(true)
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    whatsapp: '',
    contactoPor: 'correo' as 'correo' | 'whatsapp',
    queBusca: '',
  })
  const [errMsg, setErrMsg] = useState('')

  const perfil = derivarPerfil(responses)
  const resumen = resumirRespuestas(responses, camino, perfil)

  function actuForm(k: string, v: string) {
    setForm(prev => ({ ...prev, [k]: v }))
  }

  async function enviar() {
    if (!form.nombre.trim() || !form.correo.trim()) {
      setErrMsg('El nombre y el correo son necesarios para contactarte.')
      return
    }
    setErrMsg('')
    setPaso('enviando')

    const payload: MentoriaFormData = {
      nombre: form.nombre,
      correo: form.correo,
      whatsapp: form.whatsapp || undefined,
      contactoPor: form.contactoPor,
      queBusca: form.queBusca,
      camino: camino === 'est' ? 'Estudiante' : 'Profesionista',
      perfil,
      timestamp: new Date().toISOString(),
      // Solo incluir respuestas del recorrido si dio consentimiento
      ...(compartir ? {
        lenguaje: responses.lenguaje,
        etapaOrol: responses.etapaOrol,
        eval1: responses.eval1,
        eval2: responses.eval2,
        eval3: responses.eval3,
        m1SiPasó: responses.m1SiPasó,
        m2EsEstructural: responses.m2EsEstructural,
        m3SeIdentifica: responses.m3SeIdentifica,
        mitoGenio: responses.mitoGenio,
      } : {}),
    }

    const result = await enviarSolicitudMentoria(payload)
    setPaso(result.ok ? 'exito' : 'error')
  }

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>

        {/* ── PASO 1: Consentimiento ── */}
        {paso === 'consentimiento' && (
          <>
            <button className={styles.closeBtn} onClick={onClose}>✕</button>
            <div className={styles.header}>
              <div className={styles.headerIco}>💬</div>
              <h2 className={styles.headerTitle}>Solicitar mentoría breve</h2>
              <p className={styles.headerSub}>30–45 min · sin costo · confidencial</p>
            </div>

            <div className={styles.consentBox}>
              <div className={styles.consentTitle}>¿Compartes tu recorrido?</div>
              <p className={styles.consentDesc}>
                Durante la guía registraste algunas respuestas. Puedes compartirlas
                para que la sesión de mentoría arranque con contexto, sin que tengas
                que repetir todo desde cero.
              </p>

              <div className={styles.resumen}>
                <div className={styles.resumenLabel}>Lo que se compartiría</div>
                {resumen.map((l, i) => (
                  <div key={i} className={styles.resumenItem}>
                    <span className={styles.resumenDot}>·</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>

              <label className={styles.checkRow}>
                <input
                  type="checkbox"
                  checked={compartir}
                  onChange={e => setCompartir(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.checkLabel}>
                  Sí, compartir mi recorrido con la mentora
                </span>
              </label>
              {!compartir && (
                <p className={styles.noCompartirNote}>
                  Está bien. Solo se enviarán tus datos de contacto.
                </p>
              )}
            </div>

            <div className={styles.privacyLine}>
              🔒 Tus datos solo se usan para contactarte y preparar la sesión. No se comparten con terceros.
            </div>

            <div className={styles.ctaRow}>
              <button className={styles.btnSecondary} onClick={onClose}>Cancelar</button>
              <button className={styles.btnPrimary} onClick={() => setPaso('formulario')}>
                Continuar →
              </button>
            </div>
          </>
        )}

        {/* ── PASO 2: Formulario de contacto ── */}
        {paso === 'formulario' && (
          <>
            <button className={styles.closeBtn} onClick={onClose}>✕</button>
            <div className={styles.header}>
              <h2 className={styles.headerTitle}>¿Cómo te contactamos?</h2>
              <p className={styles.headerSub}>Solo necesitamos lo básico para agendar la sesión.</p>
            </div>

            <div className={styles.formBody}>
              <div className={styles.field}>
                <label className={styles.label}>Nombre <span className={styles.req}>*</span></label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Como quieras que te llame"
                  value={form.nombre}
                  onChange={e => actuForm('nombre', e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Correo electrónico <span className={styles.req}>*</span></label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.correo}
                  onChange={e => actuForm('correo', e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>¿Cómo prefieres que te contacten?</label>
                <div className={styles.radioRow}>
                  {(['correo', 'whatsapp'] as const).map(op => (
                    <label key={op} className={`${styles.radioOpt} ${form.contactoPor === op ? styles.radioSel : ''}`}>
                      <input
                        type="radio"
                        name="contactoPor"
                        value={op}
                        checked={form.contactoPor === op}
                        onChange={() => actuForm('contactoPor', op)}
                        className={styles.radioInput}
                      />
                      {op === 'correo' ? '✉️ Por correo' : '📱 Por WhatsApp'}
                    </label>
                  ))}
                </div>
              </div>

              {form.contactoPor === 'whatsapp' && (
                <div className={styles.field}>
                  <label className={styles.label}>WhatsApp</label>
                  <input
                    className={styles.input}
                    type="tel"
                    placeholder="+52 55 1234 5678"
                    value={form.whatsapp}
                    onChange={e => actuForm('whatsapp', e.target.value)}
                  />
                </div>
              )}

              <div className={styles.field}>
                <label className={styles.label}>¿Qué te gustaría revisar en la sesión? <span className={styles.opt}>(opcional)</span></label>
                <textarea
                  className={styles.textarea}
                  placeholder="Puedes escribir lo que quieras o dejarlo en blanco. No hay respuesta incorrecta."
                  rows={3}
                  value={form.queBusca}
                  onChange={e => actuForm('queBusca', e.target.value)}
                />
              </div>

              {errMsg && <div className={styles.errMsg}>⚠️ {errMsg}</div>}
            </div>

            <div className={styles.ctaRow}>
              <button className={styles.btnSecondary} onClick={() => setPaso('consentimiento')}>← Atrás</button>
              <button className={styles.btnPrimary} onClick={enviar}>
                Enviar solicitud →
              </button>
            </div>
          </>
        )}

        {/* ── ENVIANDO ── */}
        {paso === 'enviando' && (
          <div className={styles.centrado}>
            <div className={styles.spinner} />
            <p className={styles.centradoTxt}>Enviando tu solicitud…</p>
          </div>
        )}

        {/* ── ÉXITO ── */}
        {paso === 'exito' && (
          <div className={styles.centrado}>
            <div className={styles.exitoIco}>💜</div>
            <h2 className={styles.exitoTitle}>Solicitud enviada</h2>
            <p className={styles.exitoTxt}>
              Recibí tu solicitud. Me pondré en contacto en los próximos
              2–3 días hábiles para agendar la sesión.
            </p>
            <p className={styles.exitoTxt} style={{ marginTop: 8 }}>
              La sesión es confidencial. Lo que conversemos se queda entre nosotras.
            </p>
            <button className={styles.btnPrimary} style={{ marginTop: 24 }} onClick={onClose}>
              Cerrar
            </button>
          </div>
        )}

        {/* ── ERROR ── */}
        {paso === 'error' && (
          <div className={styles.centrado}>
            <div className={styles.errorIco}>⚠️</div>
            <h2 className={styles.exitoTitle}>Algo salió mal</h2>
            <p className={styles.exitoTxt}>
              No se pudo enviar tu solicitud. Intenta de nuevo en un momento.
              Si el problema persiste, escríbeme directamente a tu correo de contacto.
            </p>
            <div className={styles.ctaRow} style={{ marginTop: 24 }}>
              <button className={styles.btnSecondary} onClick={onClose}>Cerrar</button>
              <button className={styles.btnPrimary} onClick={() => setPaso('formulario')}>
                Intentar de nuevo
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
