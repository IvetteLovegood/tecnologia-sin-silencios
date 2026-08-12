import type { CaminoData } from './types'
import { detalleBarreras } from './barreras'
import { detallePreguntas } from './preguntas'

export const profesionistas: CaminoData = {
  topLabel: '💻 profesionistas',
  topClass: 'tb-pro',

  contextQuestions: [
    {
      id: 'rol',
      label: '¿Cuál es tu rol o puesto actual?',
      type: 'chips',
      options: ['Dev / Ingeniería', 'QA / Testing', 'Data / Analytics', 'DevOps / Infra', 'Product / PM', 'Diseño UX/UI', 'Otro'],
    },
    {
      id: 'experiencia',
      label: '¿Cuánto tiempo llevas en la industria?',
      type: 'chips',
      options: ['Menos de 1 año', '1–3 años', '3–5 años', 'Más de 5 años'],
    },
  ],

  evalQ1: '¿Qué tanto puedes identificar cuándo algo en tu trabajo no está bien, más allá de un simple malentendido?',
  evalQ3: 'Si algo te hace sentir incómoda en tu equipo o empresa, ¿sabes qué podrías hacer al respecto?',

  m1Intro: 'A veces hay algo en el ambiente de tu equipo que no cuadra. En el standup nadie te mira cuando hablas. Tu PR lleva días sin review. Propones algo en la junta y lo ignoran, pero cuando lo repite alguien más, todo el mundo toma nota.',
  m1ChatIcon: '💬',
  m1ChatName: '<span>#general</span> — slack del equipo',
  m1Chat: [
    { av: 'av-p', ini: 'AL', who: 'Ana L.', ts: '10:14', txt: '¿Qué tal si en el próximo sprint probamos logs centralizados? Podría ayudar bastante con el debugging.' },
    { av: '', ini: '', who: '', ts: '', txt: '— sin respuesta —', gap: true },
    { av: 'av-g', ini: 'RM', who: 'Roberto M.', ts: '10:31', txt: 'Oigan, ¿qué les parece si hacemos logs centralizados para el próximo sprint? Para el debugging estaría genial.' },
    { av: 'av-a', ini: 'TL', who: 'Tech Lead', ts: '10:32', txt: 'Buenísima idea Roberto, agrégalo al backlog 🔥' },
  ],
  m1Qs: [
    { texto: '¿Te ha pasado proponer algo en una junta o en Slack y que nadie lo tome en cuenta, pero si lo dice otra persona sí?' },
    { texto: '¿Has sentido que tu trabajo técnico tiene que pasar más filtros que el de tus compañeros para ser aceptado?' },
    { texto: '¿Alguna vez saliste de una reunión con la sensación de que algo no estuvo bien, aunque no puedas explicar exactamente qué?' },
    { texto: '¿Hay algo que te incomoda en tu equipo o empresa, pero no sabes bien cómo explicárselo a alguien sin sonar exagerada?' },
  ],

  m2TestQ: 'Sofía — dev backend, 2 años en la empresa',
  m2TestT: '"Al principio pensé que era yo. Que era insegura o que todavía me faltaba experiencia. Pero luego noté que a mis compañeras les pasaba lo mismo. Y que a los chicos del equipo, no. En las entrevistas técnicas nos preguntan cosas distintas. En los code reviews nos dejan más comentarios sobre el estilo que sobre la lógica. No es aleatoria la distribución."',
  m2Qs: [
    { texto: '¿Las personas más escuchadas, promovidas o reconocidas en tu equipo comparten características entre sí?', detalle: detallePreguntas.mismo_patron },
    { texto: '¿Alguna compañera te ha contado algo parecido a lo que tú has vivido en esa empresa o equipo?' },
    { texto: '¿Hay dinámicas en tu trabajo que parecen normales, pero que si las piensas bien, no son justas para todas las personas?' },
    { texto: '¿Sientes que hay reglas no escritas sobre quién puede hablar, proponer o decidir?', detalle: detallePreguntas.reglas_no_escritas },
  ],

  m3Barreras: [
    { ico: '⚧️', name: 'Género',                  sub: 'Asumir quién puede hacer qué según si eres chica o chico',                              detalle: detalleBarreras.genero },
    { ico: '🎂', name: 'Antigüedad',               sub: 'La junior que sabe más pero no se le escucha por tener menos tiempo',                   detalle: detalleBarreras.edad },
    { ico: '🏫', name: 'Dónde estudiaste',         sub: 'Bootcamp vs. universidad · empresa anterior "conocida" vs. no',                         detalle: detalleBarreras.institucion },
    { ico: '💬', name: 'Acento / idioma',           sub: 'Reuniones en inglés donde no todas pueden participar igual',                            detalle: detalleBarreras.acento },
    { ico: '📜', name: 'Trayectoria',              sub: 'Quien trabajó en empresa "grande" tiene más credibilidad por default',                   detalle: detalleBarreras.trayectoria },
    { ico: '🏛️', name: 'Jerarquía',               sub: 'La opinión del senior o del manager tiene más peso, aunque no sea la más técnica',       detalle: detalleBarreras.jerarquia },
    { ico: '🧠', name: 'Cómo procesas información',sub: 'Si necesitas instrucciones claras, tiempo extra o ambientes tranquilos para rendir bien',detalle: detalleBarreras.procesamiento },
  ],
  m3ChatIcon: '💬',
  m3ChatName: '<span>#code-review</span> — PR #241',
  m3Chat: [
    { av: 'av-r', ini: 'MG', who: 'María G.', ts: 'PR #241', txt: 'Tengo como 30 comentarios en mi PR. Todos sobre nomenclatura, espacios, comentarios. El PR de Andrés con lógica parecida tuvo 3, sobre funcionalidad. ¿Me revisan diferente? ¿O es que tengo estándares más bajos y no me había dado cuenta?' },
  ],
  m3Qs: [
    { texto: '¿Te has sentido invisible en alguna reunión o canal, como si lo que dices no tuviera el mismo peso?', detalle: detallePreguntas.visible_invisible },
    { texto: '¿Hay situaciones en tu trabajo donde sientes que te evalúan o tratan diferente por algo que no tiene que ver con tu trabajo técnico?' },
    { texto: '¿Has notado que algunas personas reciben más beneficio de la duda que otras en tu equipo?', detalle: detallePreguntas.beneficio_duda },
    { texto: '¿Necesitas condiciones específicas para trabajar bien y eso ha generado comentarios o roces?' },
  ],

  c1Label: 'En la industria',
  c1Ej: 'Llevas meses usando una herramienta en producción. En la reunión con stakeholders, el CTO menciona lo mismo que tú dijiste en el standup de hace tres semanas y todos dicen "¡excelente idea!"',
  c2Label: 'En la industria',
  c2Ej: 'Sales de una sesión de planning sintiéndote rara. Cuando tu compañera te pregunta qué pasó, solo puedes decir "no sé, algo me incomodó". No encuentras las palabras exactas.',
  m4Qs: [
    { texto: '¿Ha habido reuniones o revisiones donde sentiste que no te tomaban en serio, aunque tu propuesta técnica era sólida?' },
    { texto: '¿Alguna vez te pasó algo en el trabajo que te molestó, pero cuando intentaste explicarlo sentiste que sonaba exagerado?' },
    { texto: '¿Te has callado en alguna situación porque no sabías cómo describir lo que pasó sin parecer "difícil"?' },
    { texto: 'Al leer estos dos conceptos, ¿reconoces alguna situación que hayas vivido?' },
  ],

  m5Rutas: [
    { t: 'Ponlo por escrito', d: 'Fecha, qué pasó, en qué reunión o canal, qué se dijo. No para acusar, sino para aclarar. Los screenshots son válidos.' },
    { t: 'Habla con alguien de confianza', d: 'Una compañera, alguien de tu red, una mentora. No para que resuelva, sino para no procesar sola.' },
    { t: 'Mira si te pasó solo a ti', d: 'Si otras personas con características similares vivieron lo mismo en el mismo equipo, eso cambia el panorama.' },
    { t: 'Conoce qué existe en tu empresa', d: '¿Hay People Experience, código de conducta, canales de reporte? Conocerlos no obliga a usarlos.' },
    { t: 'Busca comunidades externas', d: 'Slack communities, meetups, grupos de mujeres en tech. El conocimiento colectivo ayuda.' },
    { t: 'Pide una sesión de mentoría', d: 'Si necesitas hablar con alguien que entienda el contexto de la industria y tenga perspectiva feminista, eso existe.' },
  ],

  m6Items: [
    'Lo que vives está afectando tu bienestar, tu motivación o tus ganas de seguir en tech.',
    'No tienes claro si lo que pasó fue algo real o si "estás exagerando" (spoiler: probablemente no).',
    'Quieres hablar con alguien que entienda el contexto de la industria y no te diga "así es el ambiente" o "aguanta".',
    'Lo que vives podría afectar decisiones importantes: renunciar, cambiar de área, no postularte a ciertas oportunidades.',
    'Necesitas un espacio donde puedas explicarte a tu propio ritmo, sin presión de ser rápida o concisa.',
  ],

  resSubTxt: 'Pasaste por 7 módulos de reflexión sobre lo que puede pasar en entornos tech profesionales. Esto no define tu situación: es un punto de partida.',
  resRutasLabel: 'Seis rutas de acción para el contexto laboral',
  ctaTxt: 'Si sientes que tu situación necesita una conversación más personalizada, puedes solicitar una sesión de mentoría breve. Sin costo, sin formularios largos.',
}
