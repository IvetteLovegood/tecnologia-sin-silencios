import type { CaminoData, Camino, UserResponses } from '../../data/types'
import { ChatBubble } from '../../components/ChatBubble/ChatBubble'
import { ConceptCard } from '../../components/ConceptCard/ConceptCard'
import { BiasGrid } from '../../components/BiasGrid/BiasGrid'
import { ActionCard } from '../../components/ActionCard/ActionCard'
import { EvalScale } from '../../components/EvalScale/EvalScale'
import { ContextStep } from '../../components/ContextStep/ContextStep'
import { SolidarityBanner } from '../../components/SolidarityBanner/SolidarityBanner'
import { YesNoQuestion } from '../../components/YesNoQuestion/YesNoQuestion'
import { QuestionSlider } from '../../components/QuestionSlider/QuestionSlider'
import { PrivacyNote } from '../../components/PrivacyNote/PrivacyNote'
import styles from './Journey.module.css'

interface Props {
  data: CaminoData
  step: number
  camino: Camino
  responses: UserResponses
  onUpdate: (patch: Partial<UserResponses>) => void
  onNext: () => void
  onPrev: () => void
}

export function Journey({ data, step, camino, responses, onUpdate, onNext, onPrev }: Props) {

  const NavBtns = ({ prevLabel = '← Anterior', nextLabel = 'Siguiente →' }: { prevLabel?: string; nextLabel?: string }) => (
    <div className={styles.navBtns}>
      <button className={styles.btnSecondary} onClick={onPrev}>{prevLabel}</button>
      <button className={styles.btnPrimary} onClick={onNext}>{nextLabel}</button>
    </div>
  )

  // ── STEP 1: CONTEXTO + EVAL INICIAL ──
  if (step === 1) return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>Antes de empezar</p>
      <h2 className={styles.title}>Cuéntanos un poco de ti</h2>
      <p className={styles.intro}>Primero dos preguntas rápidas sobre tu contexto. Después tres preguntas sobre cómo te sientes hoy. No hay respuestas correctas y nada de esto se guarda.</p>
      <PrivacyNote />
      <ContextStep questions={data.contextQuestions} />
      <div className={styles.divider} />
      <EvalScale
        label={data.evalQ1}
        min="Para nada"
        max="Lo tengo claro"
        onChange={v => onUpdate({ eval1: v })}
      />
      <EvalScale
        label="¿Qué tan fácil te resulta explicarle a alguien algo incómodo que viviste en tech?"
        min="Muy difícil"
        max="Muy fácil"
        onChange={v => onUpdate({ eval2: v })}
      />
      <EvalScale
        label={data.evalQ3}
        min="No tengo idea"
        max="Sé qué hacer"
        onChange={v => onUpdate({ eval3: v })}
      />
      <NavBtns prevLabel="← Inicio" nextLabel="Empezar →" />
    </div>
  )

  // ── STEP 2: MÓDULO 1 ──
  if (step === 2) return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <p className={styles.eyebrow}>Módulo 1 de 7</p>
          <h2 className={styles.title}>¿Qué está pasando?</h2>
          <p className={styles.intro}>{data.m1Intro}</p>
          <ChatBubble icon={data.m1ChatIcon} name={data.m1ChatName} messages={data.m1Chat} />
          <p className={styles.body}>Esta guía no va a decirte cómo sentirte ni si lo que pasó fue lo que crees. Lo que sí puede hacer es ayudarte a verlo con más claridad.</p>
        </div>
        <div className={styles.colRight}>
          <SolidarityBanner message="No estás sola si reconoces esto. Es una situación más común de lo que parece, y que muchas personas vivieron sin saber cómo llamarla." />
          <QuestionSlider label="¿Te ha pasado algo de esto?" questions={data.m1Qs} />
          <YesNoQuestion
            question="Después de leer esto, ¿sientes que algo de lo que describes te ha pasado a ti?"
            yesLabel="Sí, me pasó"
            maybeLabel="Algo parecido"
            noLabel="No realmente"
            onChange={v => onUpdate({ m1SiPasó: v === 'si' || v === 'tal_vez' })}
          />
        </div>
      </div>
      <NavBtns />
    </div>
  )

  // ── STEP 3: MÓDULO 2 ──
  if (step === 3) return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <p className={styles.eyebrow}>Módulo 2 de 7</p>
          <h2 className={styles.title}>¿Soy yo, o es algo más grande?</h2>
          <p className={styles.intro}>La primera reacción casi siempre es pensar que somos nosotras el problema. Que si fuéramos más seguras, más técnicas, más directas, eso no pasaría. Pero a veces el problema no está en ti.</p>
          <div className={styles.testimonio}>
            <div className={styles.testQuien}>{data.m2TestQ}</div>
            <div className={styles.testTxt}>{data.m2TestT}</div>
          </div>
          <p className={styles.body}>Cuando varias personas con características similares viven las mismas situaciones en el mismo espacio, eso deja de ser coincidencia.</p>
        </div>
        <div className={styles.colRight}>
          {responses.m1SiPasó && (
            <SolidarityBanner message="Dijiste que algo de esto te pasó. Eso importa. Esta sección puede ayudarte a ver si fue algo puntual o si hay algo más grande detrás." />
          )}
          {!responses.m1SiPasó && (
            <SolidarityBanner message="Si llegaste aquí con dudas, también está bien. A veces tomamos distancia de nuestras propias experiencias. Lee esto con calma." />
          )}
          <QuestionSlider label="¿Has vivido algo parecido?" questions={data.m2Qs} />
          <YesNoQuestion
            question="¿Sientes que lo que describes podría tener que ver con cómo está organizado ese espacio y no solo con algo tuyo?"
            yesLabel="Creo que sí"
            maybeLabel="No sé, quizás"
            noLabel="No lo veo así"
            onChange={v => onUpdate({ m2EsEstructural: v === 'si' || v === 'tal_vez' })}
          />
        </div>
      </div>
      <NavBtns />
    </div>
  )

  // ── STEP 4: MÓDULO 3 ──
  if (step === 4) return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <p className={styles.eyebrow}>Módulo 3 de 7</p>
          <h2 className={styles.title}>¿Qué hay detrás de eso?</h2>
          <p className={styles.intro}>A veces lo que vivimos tiene que ver con ideas implícitas sobre quién puede hacer qué, quién merece ser escuchada, o quién necesita demostrar más. Estas ideas operan muchas veces sin que nadie las diga en voz alta.</p>
          {responses.m2EsEstructural === true && (
            <div className={styles.adaptNote}>
              <span className={styles.adaptIco}>💡</span>
              <span>Dijiste que sientes que hay algo más grande detrás. Esta sección puede darte palabras más concretas para nombrarlo.</span>
            </div>
          )}
          {responses.m2EsEstructural === false && (
            <div className={styles.adaptNote}>
              <span className={styles.adaptIco}>💡</span>
              <span>No tienes que llegar a ninguna conclusión hoy. Lee esto con la mente abierta — a veces las cosas toman sentido con tiempo.</span>
            </div>
          )}
          <BiasGrid biases={data.m3Barreras} />
          <ChatBubble icon={data.m3ChatIcon} name={data.m3ChatName} messages={data.m3Chat} tag="Lo que pocas veces se dice en voz alta" />
        </div>
        <div className={styles.colRight}>
          <SolidarityBanner message="Nota sobre cómo procesamos distinto: si necesitas más tiempo, instrucciones muy claras o ambientes sin ruido para trabajar bien, eso no es un defecto. Es una forma válida de funcionar." />
          <QuestionSlider label="¿Algo de esto te resulta familiar?" questions={data.m3Qs} />
          <YesNoQuestion
            question="¿Reconoces alguna de estas dinámicas en el espacio donde estudias o trabajas?"
            yesLabel="Sí, la reconozco"
            maybeLabel="Algo parecido"
            noLabel="No lo veo"
            onChange={v => onUpdate({ m3SeIdentifica: v === 'si' || v === 'tal_vez' })}
          />
        </div>
      </div>
      <NavBtns />
    </div>
  )

  // ── STEP 5: MÓDULO 4 — Esto tiene nombre ──
  if (step === 5) return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <p className={styles.eyebrow}>Módulo 4 de 7</p>
          <h2 className={styles.title}>Esto tiene nombre</h2>
          <p className={styles.intro}>Darle nombre a lo que viviste no lo cambia de golpe. Pero te ayuda a saber que no estás exagerando, que no eres la única, y que hay palabras para explicárselo a alguien.</p>
          <ConceptCard
            file="// concepto_01.md"
            def="Tu voz vale menos por quién eres, no por lo que dices."
            exp="Pasa cuando alguien es menos escuchada, menos creída o menos tomada en serio por su género, edad, institución o trayectoria — y no por la calidad de sus ideas. **No es que expliques mal. Es que el filtro con el que te escuchan es distinto.**"
            ejLabel={data.c1Label}
            ej={data.c1Ej}
            variant={1}
          />
          <ConceptCard
            file="// concepto_02.md"
            def="Sabes que algo está mal, pero no encuentras cómo explicarlo."
            exp="No siempre existen las palabras para hablar de ciertas experiencias, porque esas experiencias nunca se nombraron en ese espacio. **Eso no es tu limitación. Es un hueco en el lenguaje común.**"
            ejLabel={data.c2Label}
            ej={data.c2Ej}
            variant={2}
          />
        </div>
        <div className={styles.colRight}>
          <SolidarityBanner message="No estás sola en no tener palabras. Estas situaciones son difíciles de nombrar precisamente porque el lenguaje para hablar de ellas todavía se está construyendo." />
          <QuestionSlider label="¿Algo de esto conecta con lo que has vivido?" questions={data.m4Qs} />
        </div>
      </div>
      <NavBtns />
    </div>
  )

  // ── STEP 6: MÓDULO 5 — El mito del genio ──
  if (step === 6) return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <p className={styles.eyebrow}>Módulo 5 de 7</p>
          <h2 className={styles.title}>El mito de que hay personas "naturalmente buenas" para tech</h2>
          <p className={styles.intro}>
            En casi todos los espacios de tecnología existe una idea implícita: que hay personas que "nacen" para esto, que lo entienden de forma natural, que son brillantes de origen. Y que las demás — si tienen que esforzarse, preguntar o tardar más — quizás no son para esto.
          </p>
          <div className={styles.mito}>
            <div className={styles.mitoLabel}>¿Cómo se ve esto en la práctica?</div>
            {[
              { ico: '⚡', txt: 'Quien pregunta mucho en clase o en el equipo "quizás no está al nivel".' },
              { ico: '🏆', txt: 'El éxito se explica por talento individual, no por redes de apoyo, tiempo o recursos.' },
              { ico: '🚪', txt: 'Si tardas más que otros en aprender algo, internalizas que "no eres buena para esto".' },
              { ico: '🔇', txt: 'Las personas que no encajan en el estereotipo del "programador brillante" terminan silenciándose.' },
            ].map((item, i) => (
              <div key={i} className={styles.mitoItem}>
                <span className={styles.mitoIco}>{item.ico}</span>
                <span className={styles.mitoTxt}>{item.txt}</span>
              </div>
            ))}
          </div>
          <div className={styles.realidad}>
            <div className={styles.realidadLabel}>Lo que sí es verdad</div>
            <p className={styles.realidadTxt}>
              La ciencia y la tecnología son actividades humanas que se aprenden, se practican y se desarrollan en comunidad. No hay personas que "nazcan sabiendo". Lo que sí hay son condiciones desiguales de acceso, tiempo, redes y reconocimiento.
            </p>
            <p className={styles.realidadTxt} style={{ marginTop: 12 }}>
              Que tú tardes más, preguntes más o necesites más apoyos no dice nada sobre tu capacidad. Dice algo sobre los recursos que tuviste disponibles y sobre los espacios que te hicieron sentir que no pertenecías.
            </p>
          </div>
        </div>
        <div className={styles.colRight}>
          <SolidarityBanner message="No estás sola si alguna vez pensaste que no eras suficientemente buena para esto. Ese pensamiento muchas veces viene de afuera — de espacios que no estaban diseñados para incluirte — no de lo que tú realmente eres o puedes." />
          <QuestionSlider label="¿Esto te resuena?" questions={camino === 'est'
            ? [
              { texto: '¿Alguna vez sentiste que tardabas más que tus compañeros en entender algo y lo interpretaste como una señal de que no eras buena para la carrera?', detalle: { titulo: '¿Por qué tardarse más no significa saber menos?', explicacion: 'La velocidad de aprendizaje depende enormemente del contexto de partida: acceso a computadora desde niña, cursos previos, redes de apoyo. Quien llegó con más exposición previa no es más "talentosa" — tuvo más práctica antes.', ejemplo: 'Dos personas en el mismo curso. Una lleva programando desde los 12. La otra empezó hace seis meses. La diferencia de ritmo no es de capacidad — es de punto de partida.' } },
              { texto: '¿Has visto que el reconocimiento en tu clase o equipo recae siempre en las mismas personas, como si tuvieran algo que otras no tienen?', detalle: { titulo: 'El talento como construcción social', explicacion: 'El "talento" en tech muchas veces es visibilidad: quien habla más fuerte, quien tiene más confianza, quien lleva más tiempo en el espacio. Eso no es igual a saber más.', ejemplo: 'En clase, la persona que más participa parece más capaz. Pero participar en voz alta requiere sentirse segura en ese espacio — y esa seguridad no se reparte igual.' } },
              { texto: '¿Alguna vez dejaste de preguntar en clase por miedo a parecer menos capaz?' },
            ]
            : [
              { texto: '¿Alguna vez sentiste que necesitabas más tiempo o apoyo para algo y lo interpretaste como que no encajabas en el equipo?' },
              { texto: '¿Has visto cómo el "talento" en tu empresa siempre recae en las mismas personas, aunque no sea la única explicación posible?', detalle: { titulo: '¿Qué hay detrás del "talento" en tech?', explicacion: 'En los equipos de trabajo, quien se percibe como talentoso suele ser quien tiene más visibilidad, más acceso informal al manager, o más tiempo para dedicarle al trabajo sin otras responsabilidades. Eso no siempre es igual a las mejores habilidades técnicas.', ejemplo: 'La persona que trabaja horas extra y siempre está disponible parece más comprometida. Pero esa disponibilidad depende de no tener cargas de cuidado, vivir cerca de la oficina, o no necesitar un segundo trabajo.' } },
              { texto: '¿Alguna vez te guardaste una pregunta en una reunión por miedo a que pensaran que no sabías lo suficiente?' },
            ]}
          />
          <YesNoQuestion
            question="¿Alguna vez dudaste de si eras suficientemente buena para este campo, no por algo que hiciste mal, sino por cómo te trataron o por cómo está organizado ese espacio?"
            yesLabel="Sí, lo he sentido"
            maybeLabel="Algunas veces"
            noLabel="No realmente"
            onChange={v => onUpdate({ mitoGenio: v === 'si' || v === 'tal_vez' })}
          />
        </div>
      </div>
      <NavBtns />
    </div>
  )

  // ── STEP 7: MÓDULO 6 — Rutas de acción ──
  if (step === 7) return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>Módulo 6 de 7</p>
      <h2 className={styles.title}>¿Y ahora qué hago?</h2>
      <p className={styles.intro}>Nombrar lo que pasó es un primer paso. El siguiente es pensar qué puedes hacer, en este momento, con lo que tienes. No hay una respuesta única.</p>

      {/* Adaptativo: destacar la ruta más relevante según respuestas */}
      {responses.m2EsEstructural === false && (
        <div className={styles.adaptNote}>
          <span className={styles.adaptIco}>💡</span>
          <span>Si todavía no estás segura de si lo que viviste es un patrón o algo puntual, la primera ruta puede ayudarte a aclararlo.</span>
        </div>
      )}
      {responses.m3SeIdentifica && (
        <div className={styles.adaptNote}>
          <span className={styles.adaptIco}>💡</span>
          <span>Como identificaste dinámicas concretas, puede ser útil ver si otras personas en tu entorno vivieron algo parecido.</span>
        </div>
      )}

      <div className={styles.note}>Estas son posibilidades, no obligaciones. Tú decides qué tiene sentido para tu contexto y tu momento.</div>
      <ActionCard rutas={data.m5Rutas} />
      <SolidarityBanner message="No tienes que resolver esto sola ni de inmediato. Un paso pequeño también cuenta." />
      <NavBtns />
    </div>
  )

  // ── STEP 8: MÓDULO 7 — ¿Necesito acompañamiento? ──
  if (step === 8) return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
      <div className={styles.colLeft}>
      <p className={styles.eyebrow}>Módulo 7 de 7</p>
      <h2 className={styles.title}>¿Necesito hablar con alguien?</h2>
      <p className={styles.intro}>Esta guía puede ayudar a nombrar y a ordenar. Pero hay situaciones que necesitan más. Si sientes que tu caso es complejo o que necesitas hablarlo con alguien, eso es completamente válido.</p>
      <div className={styles.qLabel}>Puede ser momento de pedir acompañamiento si...</div>
      <div>
        {data.m6Items.map((txt, i) => (
          <div key={i} className={styles.acItem}>
            <div className={styles.acDot} />
            <div className={styles.acTxt}>{txt}</div>
          </div>
        ))}
      </div>
      </div>
      <div className={styles.colRight}>
        <SolidarityBanner message="Pedir ayuda no es rendirse. Es reconocer que ciertas cosas se piensan mejor acompañadas. La mentoría feminista parte precisamente de eso: de que nadie debería navegar esto sola." />
        <div className={styles.note} style={{ marginTop: 4 }}>Una mentoría breve no es terapia. Es una conversación para ayudarte a pensar con más claridad.</div>
        <YesNoQuestion
          question="¿Sientes que lo que viviste necesita una conversación más personalizada?"
          yesLabel="Sí, me gustaría"
          maybeLabel="Quizás después"
          noLabel="No por ahora"
          onChange={v => onUpdate({ quiereMentoria: v === 'si' || v === 'tal_vez' })}
        />
      </div>
      </div>
      <NavBtns nextLabel="Ver mi resumen →" />
    </div>
  )

  return null
}
