import type { CaminoData } from './types'
import { getDetalleBarreras } from './barreras'
import { getDetallePreguntas } from './preguntas'

const detalleBarreras = getDetalleBarreras('est')
const detallePreguntas = getDetallePreguntas('est')

export const estudiantes: CaminoData = {
  topLabel: '🎓 estudiantes',
  topClass: 'tb-est',

  contextQuestions: [
    {
      id: 'lenguaje',
      label: '¿Con qué lenguaje o tecnología trabajas más seguido?',
      type: 'chips',
      options: ['Python', 'JavaScript', 'Java', 'C / C++', 'TypeScript', 'Otro'],
    },
    {
      id: 'etapa',
      label: '¿En qué momento de tu carrera estás?',
      type: 'chips',
      options: ['Primeros semestres', 'Mitad de la carrera', 'Últimos semestres', 'Bootcamp', 'Buscando primer empleo'],
    },
  ],

  evalQ1: '¿Qué tanto puedes identificar si algo que viviste en clases o proyectos tiene que ver con tu género o identidad, y no solo con tu desempeño?',
  evalQ3: 'Si algo te hace sentir excluida o menospreciada en tu escuela, ¿sabes a quién acudir o qué podrías hacer?',

  m1Intro: 'A veces hay algo en el ambiente de tus clases o en tu equipo de proyecto que no cuadra. En clase nadie levanta la vista cuando hablas. Tu aportación la ignoran, pero si la repite alguien más la incluyen. Llevas días esperando retroalimentación de tu código y todos los demás ya recibieron la suya.',
  m1ChatIcon: '💬',
  m1ChatName: '<span>Proyecto final</span> — Equipo 4',
  m1Chat: [
    { av: 'av-p', ini: 'KA', who: 'Karla', ts: '10:14', txt: '¿Y si hacemos la autenticación con JWT? Creo que sería más limpio para el backend.' },
    { av: '', ini: '', who: '', ts: '', txt: '— 3 mensajes sin respuesta —', gap: true },
    { av: 'av-g', ini: 'LM', who: 'Luis', ts: '10:31', txt: 'Oigan, ¿qué tal si usamos JWT para el auth? Sería lo más limpio.' },
    { av: 'av-a', ini: 'Prof', who: 'Profe', ts: '10:32', txt: 'Muy buena idea Luis, así queda más escalable 👌' },
  ],
  m1Qs: [
    { texto: '¿Te ha pasado proponer algo en clase o en un proyecto grupal y que nadie lo tome en cuenta, pero si lo dice otra persona sí?' },
    { texto: '¿Has sentido que tienes que esforzarte más que tus compañeros para que confíen en tu trabajo técnico?' },
    { texto: '¿Alguna vez llegaste a dudar de si eres "suficientemente buena" para esta carrera, no por tu desempeño, sino por cómo alguien te trató?' },
    { texto: '¿Hay algo que te incomoda en tu equipo o en tus clases, pero no sabes bien cómo explicárselo a alguien?' },
  ],

  m2TestQ: 'Ana — 3er semestre de ISC',
  m2TestT: '"Al principio pensé que era yo la del problema. Que era insegura y ya. Pero luego noté que a mis compañeras les pasaba lo mismo. En los hackathons siempre nos ponían a documentar o a diseñar la presentación. A los chicos les dejaban el backend. Nadie lo decidía explícitamente, simplemente \'pasaba\'. No era coincidencia."',
  m2Qs: [
    { texto: '¿Las personas que son más escuchadas o reconocidas en tus clases o proyectos comparten características entre sí?', detalle: detallePreguntas.mismo_patron },
    { texto: '¿Alguna compañera te ha contado algo parecido a lo que tú has vivido?' },
    { texto: '¿Hay dinámicas en tu equipo o escuela que parecen normales, pero que si las piensas bien, no son justas para todas las personas?' },
    { texto: '¿Sientes que hay reglas no escritas que favorecen a ciertas personas sin que nadie lo diga en voz alta?', detalle: detallePreguntas.reglas_no_escritas },
  ],

  m3Barreras: [
    { ico: '⚧️', name: 'Género',                  sub: 'Asumir quién puede hacer qué según si eres chica o chico',          detalle: detalleBarreras.genero },
    { ico: '🎂', name: 'Edad',                     sub: 'Tratarte diferente por ser más joven o menos experimentada',         detalle: detalleBarreras.edad },
    { ico: '🏫', name: 'Escuela',                  sub: 'Privada vs. pública · "¿eso dónde lo aprendiste?"',                  detalle: detalleBarreras.institucion },
    { ico: '📜', name: 'Experiencia previa',       sub: 'Quienes ya sabían antes tienen más voz desde el día uno',            detalle: detalleBarreras.trayectoria },
    { ico: '🏛️', name: 'Jerarquía',               sub: 'Lo que dice el profe o el líder del equipo es la única verdad',      detalle: detalleBarreras.jerarquia },
    { ico: '💬', name: 'Forma de comunicarte',     sub: 'Cómo hablas, si eres muy directa o muy callada, si tienes acento',   detalle: detalleBarreras.acento },
    { ico: '🧠', name: 'Cómo procesas información',sub: 'Si necesitas más tiempo, texto en lugar de voz, o procesas distinto',detalle: detalleBarreras.procesamiento },
  ],
  m3ChatIcon: '💬',
  m3ChatName: '<span>Entrega del proyecto</span>',
  m3Chat: [
    { av: 'av-p', ini: 'MA', who: 'Mariana', ts: 'Retrospectiva', txt: '"Yo diseñé el modelo relacional completo de la base de datos. En la presentación, mi compañero explicó \'su\' base de datos. Nadie lo corrigió. Ni siquiera yo, en ese momento. No supe cómo."' },
  ],
  m3Qs: [
    { texto: '¿Te has sentido invisible en algún espacio de tu carrera, como si lo que dices o haces no cuenta igual?', detalle: detallePreguntas.visible_invisible },
    { texto: '¿Hay roles en tus proyectos que siempre terminan siendo para las mismas personas, aunque nadie lo haya decidido explícitamente?' },
    { texto: '¿Alguna vez sentiste que te evaluaron o trataron diferente por algo que no tenía que ver con tu trabajo técnico?' },
    { texto: '¿Necesitas condiciones especiales para trabajar bien (más tiempo, instrucciones escritas, ambiente tranquilo) y eso ha generado comentarios o fricciones?' },
  ],

  c1Label: 'En la carrera',
  c1Ej: 'Haces una pregunta en clase y el profe la responde de manera genérica. Tu compañero hace la misma pregunta quince minutos después y el profe la desarrolla con detalle.',
  c2Label: 'En la carrera',
  c2Ej: 'Sales de un hackathon sintiéndote rara, como si algo no hubiera estado bien. Cuando intentas contárselo a alguien solo puedes decir "no sé, fue incómodo". No encuentras las palabras exactas.',
  m4Qs: [
    { texto: '¿Ha habido momentos en clase o proyectos donde sentiste que no te tomaban en serio, aunque tu propuesta era técnicamente correcta?' },
    { texto: '¿Alguna vez te pasó algo que te molestó, pero cuando intentaste explicarlo sentiste que sonaba exagerado?' },
    { texto: '¿Te has quedado en silencio en alguna situación porque no sabías cómo describir lo que pasó?' },
    { texto: 'Al leer estos dos conceptos, ¿reconoces alguna situación que hayas vivido?' },
  ],

  m5Rutas: [
    { t: 'Ponlo por escrito', d: 'Anota qué pasó, cuándo, en qué clase o proyecto, qué se dijo y quién estaba. No para acusar, sino para aclarar.' },
    { t: 'Habla con alguien de confianza', d: 'Una compañera, una tutora, alguien de tu red. No para que resuelva el problema, sino para no procesarlo sola.' },
    { t: 'Mira si te pasó solo a ti', d: 'Si otras compañeras vivieron algo parecido, eso cambia el panorama.' },
    { t: 'Conoce qué existe en tu escuela', d: '¿Hay coordinación de género, protocolo de acoso, orientación? Conocerlos no obliga a usarlos.' },
    { t: 'Busca redes estudiantiles de tech', d: 'Clubes, comunidades en Discord, grupos de mujeres en tech. No estás inventando la rueda.' },
    { t: 'Pide una sesión de mentoría', d: 'Si necesitas hablar con alguien que entienda el contexto tech y tenga perspectiva feminista, eso existe.' },
  ],

  m6Items: [
    'Lo que vives está afectando tus ganas de seguir estudiando tech o tu bienestar en la carrera.',
    'No tienes claro si lo que pasó fue algo real o si "estás exagerando" (spoiler: probablemente no).',
    'Quieres hablar con alguien que entienda el contexto de la carrera y no te diga solo "aguanta" o "así es".',
    'Sientes que lo que vives podría afectar decisiones importantes: dejar la carrera, cambiar de área, no aplicar a ciertos lugares.',
    'Necesitas un espacio donde puedas explicarte a tu propio ritmo, sin presión de ser rápida o lineal.',
  ],

  resSubTxt: 'Pasaste por 7 módulos de reflexión sobre lo que puede pasar en entornos tech estudiantiles. Esto no define tu situación: es un punto de partida.',
  resRutasLabel: 'Seis rutas de acción para el contexto estudiantil',
  ctaTxt: 'Si sientes que tu situación necesita una conversación más personalizada, puedes solicitar una sesión de mentoría breve. Sin costo, sin formularios largos.',
}
