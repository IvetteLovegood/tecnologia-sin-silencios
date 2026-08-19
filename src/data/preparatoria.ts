import type { CaminoData } from './types'
import { getDetalleBarreras } from './barreras'
import { getDetallePreguntas } from './preguntas'

const detalleBarreras = getDetalleBarreras('prepa')
const detallePreguntas = getDetallePreguntas('prepa')

export const preparatoria: CaminoData = {
  topLabel: '📚 prepa / secundaria',
  topClass: 'tb-prepa',

  contextQuestions: [
    {
      id: 'etapa',
      label: '¿En qué momento estás?',
      type: 'chips',
      options: ['Secundaria', '1° o 2° de prepa', '3° de prepa / eligiendo carrera', 'Ya elegí pero aún no entro'],
    },
    {
      id: 'lenguaje',
      label: '¿Qué tanto contacto has tenido con tech o programación?',
      type: 'chips',
      options: ['Casi nada', 'Un poco en clases', 'He tomado cursos extra', 'Ya programo por mi cuenta'],
    },
  ],

  evalQ1: '¿Qué tanto puedes identificar si algo que sientes sobre tech tiene que ver con mensajes que recibiste sobre quién puede o no dedicarse a esto?',
  evalQ3: 'Si alguien te dijera que tech "no es para ti", ¿sabrías cómo responderle o dónde buscar apoyo?',

  m1Intro: 'A veces algo en tus clases de matemáticas, en el club de robótica o en una plática sobre carreras te hace sentir que tech no es tu lugar. Nadie te lo dice directamente. Pero hay algo en cómo te miran cuando preguntas, en quién sí recibe ayuda en clase, o en qué tipo de persona se imagina cuando alguien dice "programadora".',
  m1ChatIcon: '💬',
  m1ChatName: '<span>Grupo de clase</span> — WhatsApp',
  m1Chat: [
    { av: 'av-p', ini: 'SO', who: 'Sofía', ts: '4:22 pm', txt: 'oigan yo podría hacer la parte del código para el proyecto de ciencias, ya vi cómo funciona' },
    { av: '', ini: '', who: '', ts: '', txt: '— sin respuesta —', gap: true },
    { av: 'av-g', ini: 'RA', who: 'Rodrigo', ts: '4:47 pm', txt: 'yo me encargo del código, Sofía ayúdanos con la presentación' },
    { av: 'av-a', ini: 'MA', who: 'Maestra', ts: '4:48 pm', txt: 'perfecto Rodrigo, quedo pendiente de tu avance 👍' },
  ],
  m1Qs: [
    { texto: '¿Alguna vez quisiste participar en algo de tech (robótica, programación, olimpiadas de matemáticas) pero sentiste que no eras "el tipo de persona" que hace eso?' },
    { texto: '¿Has notado que en clase de tecnología o matemáticas hay personas a quienes el maestro les da más atención, confianza o explicaciones?' },
    { texto: '¿Alguien —un maestro, familiar o compañero— te ha dicho o insinuado que hay carreras más "adecuadas" para ti que las de tech?' },
    { texto: '¿Hay algo que te llama la atención de la tecnología, pero te da miedo explorar porque sientes que no es para alguien como tú?' },
  ],

  m2TestQ: 'Camila — 3° de prepa, eligió Ingeniería en Sistemas',
  m2TestT: '"Durante toda la prepa pensé que no era buena para las matemáticas. Mi maestra casi nunca me preguntaba en clase. Cuando llegué a la universidad y tuve una tutora que sí me explicaba, me di cuenta de que sí podía. La diferencia no era yo. Era a quién le ponían atención."',
  m2Qs: [
    { texto: '¿Las personas a quienes sí les va "bien" en tech en tu escuela o clase comparten características entre sí?', detalle: detallePreguntas.mismo_patron },
    { texto: '¿Alguna amiga o compañera te ha contado algo parecido: sentir que tech no es para ella aunque le interese?' },
    { texto: '¿Hay personas en tu entorno que asumen quién va a estudiar tech y quién no, sin preguntarle a nadie?' },
    { texto: '¿Sientes que para ser tomada en serio en temas de tecnología tienes que demostrar más que tus compañeros?' },
  ],

  m3Barreras: [
    { ico: '⚧️', name: 'Género',              sub: 'La idea de que hay carreras "de hombres" y carreras "de mujeres"',         detalle: detalleBarreras.genero },
    { ico: '🎂', name: 'Edad',                sub: 'Que por ser joven lo que piensas o propones no cuenta igual',               detalle: detalleBarreras.edad },
    { ico: '🏫', name: 'Tipo de escuela',     sub: 'Pública vs. privada · si tuviste o no computadora desde pequeña',           detalle: detalleBarreras.institucion },
    { ico: '📜', name: 'Experiencia previa',  sub: 'Quien ya sabe programar desde antes parece "más natural" para esto',        detalle: detalleBarreras.trayectoria },
    { ico: '🏛️', name: 'Autoridad',          sub: 'Lo que dice el maestro o el "chico que sabe más" es la única verdad',       detalle: detalleBarreras.jerarquia },
    { ico: '💬', name: 'Forma de hablar',     sub: 'Si eres callada, si preguntas mucho, si tienes acento o forma distinta',    detalle: detalleBarreras.acento },
    { ico: '🧠', name: 'Cómo aprendes',       sub: 'Si necesitas más tiempo, leer en lugar de escuchar, o procesas diferente', detalle: detalleBarreras.procesamiento },
  ],
  m3ChatIcon: '💬',
  m3ChatName: '<span>Clase de programación</span>',
  m3Chat: [
    { av: 'av-p', ini: 'VA', who: 'Valentina', ts: 'Después de clase', txt: '"Levanté la mano tres veces para que el maestro me explicara el error. Me dijo que lo leyera de nuevo. Al rato mi compañero de junto preguntó lo mismo y el maestro fue a su lugar a explicárselo. Me quedé callada. No supe qué decir."' },
  ],
  m3Qs: [
    { texto: '¿Te has sentido invisible o poco tomada en cuenta en un espacio de tech, matemáticas o ciencias?', detalle: detallePreguntas.visible_invisible },
    { texto: '¿Hay partes de tech que te interesan pero que "por alguna razón" sientes que no puedes explorar?' },
    { texto: '¿Alguna vez te evaluaron o trataron diferente por algo que no tenía que ver con lo que sabías hacer?' },
    { texto: '¿Necesitas condiciones especiales para aprender bien (más tiempo, que te expliquen por escrito, ambiente sin ruido) y eso ha generado comentarios?' },
  ],

  c1Label: 'En la prepa',
  c1Ej: 'Haces una pregunta sobre código en clase y el maestro da una respuesta rápida. Tu compañero hace la misma pregunta y el maestro se sienta con él a explicárselo con detalle.',
  c2Label: 'En la prepa',
  c2Ej: 'Sales de un taller de robótica sintiéndote rara, como que algo no estuvo bien. Cuando intentas contárselo a alguien solo puedes decir "no sé, fue incómodo". No encuentras las palabras exactas.',
  m4Qs: [
    { texto: '¿Ha habido momentos en que sentiste que no te tomaban en serio aunque tenías razón en lo técnico?' },
    { texto: '¿Alguna vez algo te molestó pero cuando intentaste explicarlo sentiste que iba a sonar exagerado?' },
    { texto: '¿Te has quedado callada en alguna situación porque no sabías cómo describir lo que pasó?' },
    { texto: 'Al leer estos dos conceptos, ¿reconoces alguna situación que hayas vivido en la escuela o al explorar tech?' },
  ],

  m5Rutas: [
    { t: 'Explora antes de decidir', d: 'No tienes que elegir tu carrera basándote en lo que otras personas dicen que puedes hacer. Hay cursos gratuitos de programación para probar sin compromiso.' },
    { t: 'Busca referentes que se parezcan a ti', d: 'Existen mujeres en tech que vienen de contextos similares al tuyo. Ver sus trayectorias puede cambiar la imagen que tienes de "quién puede hacer esto".' },
    { t: 'Habla con alguien de confianza', d: 'Una maestra, orientadora, familiar o amiga que te escuche sin juzgar. No para que resuelva nada, sino para no procesarlo sola.' },
    { t: 'Ponlo por escrito', d: 'Si algo te incomodó en clase o en un taller, anótalo: qué pasó, cuándo, qué se dijo. No para acusar, sino para aclararte a ti misma.' },
    { t: 'Conoce comunidades de jóvenes en tech', d: 'Hay grupos y programas para chicas en secundaria y prepa que quieren explorar tech: clubes de código, competencias, mentorías. No estás inventando la rueda.' },
    { t: 'Pide una sesión de mentoría', d: 'Si necesitas hablar con alguien que entienda el contexto de elegir carrera y tenga perspectiva feminista, eso existe y es gratuito.' },
  ],

  m6Items: [
    'Lo que vives está afectando tus ganas de explorar tech o de confiar en tus habilidades.',
    'Alguien —maestro, familiar, compañero— te está diciendo directa o indirectamente que tech no es para ti.',
    'No tienes claro si lo que sientes es real o si "estás exagerando" (spoiler: probablemente no).',
    'Quieres hablar con alguien que entienda el contexto de elegir carrera y no te diga solo "no le hagas caso" o "inténtalo más".',
    'Sientes que lo que vives puede afectar decisiones importantes: qué carrera elegir, si aplicar a ciertas opciones, si confiar en lo que te gusta.',
  ],

  resSubTxt: 'Pasaste por 7 módulos de reflexión sobre lo que puede pasar cuando estás explorando tech antes de elegir carrera. Esto no define tu situación: es un punto de partida.',
  resRutasLabel: 'Seis rutas de acción para explorar tech con más claridad',
  ctaTxt: 'Si sientes que tu situación necesita una conversación más personalizada, puedes solicitar una sesión de mentoría breve. Sin costo, confidencial, y con alguien que entiende el contexto de estar eligiendo.',
}
