/**
 * Preguntas con detalle de modal — compartidas entre caminos.
 * Las preguntas base se mantienen en estudiantes.ts / profesionistas.ts,
 * pero si quieren agregar el modal a alguna, se importa el detalle desde aquí.
 */
import type { QuestionDetalle } from './types'

export const detallePreguntas: Record<string, QuestionDetalle> = {
  mismo_patron: {
    titulo: '¿Por qué importa si le pasa a más personas?',
    explicacion: 'Cuando una situación le ocurre a una sola persona, puede parecer un malentendido o mala suerte. Cuando le ocurre sistemáticamente a personas con características similares en el mismo espacio, eso es evidencia de un patrón estructural — no de un problema individual.',
    ejemplo: 'Si en tres proyectos distintos las mujeres del equipo siempre terminan en documentación y presentación, y los hombres en backend, eso no es coincidencia. Es una dinámica que se reproduce.',
  },
  reglas_no_escritas: {
    titulo: '¿Qué son las reglas no escritas?',
    explicacion: 'Son expectativas, normas o formas de hacer las cosas que nadie anuncia formalmente pero que todos "saben". Quienes llegan de ciertos contextos las conocen de antes; quienes llegan de otros contextos las aprenden a golpes o simplemente no las conocen nunca.',
    ejemplo: 'En muchos equipos tech hay una regla no escrita de que las ideas hay que "venderlas" agresivamente para que sean tomadas en cuenta. Quien no creció en esa cultura puede presentar ideas perfectamente válidas que se ignoran, no por la idea en sí, sino por no seguir esa regla no escrita.',
  },
  beneficio_duda: {
    titulo: '¿Qué es el "beneficio de la duda"?',
    explicacion: 'Es la inclinación a asumir que alguien es competente, bien intencionado o capaz antes de que lo demuestre. No todas las personas reciben la misma cantidad de beneficio de la duda — normalmente depende de género, trayectoria, institución de origen, o simplemente de a quién conoces.',
    ejemplo: 'Un developer nuevo llega al equipo. Si es hombre con nombre de universidad reconocida, el equipo asume que sabe lo que hace hasta que demuestre lo contrario. Si es mujer o viene de bootcamp, a veces el punto de partida es demostrar que sí sabe, aunque tenga el mismo o mejor conocimiento.',
  },
  visible_invisible: {
    titulo: '¿Qué significa sentirse invisible en un espacio?',
    explicacion: 'No es literalmente que no te ven. Es que tus aportes no generan la misma reacción, tus preguntas se responden más brevemente, tu nombre no se menciona cuando se cita una idea que fue tuya, o simplemente sientes que podrías no estar y el espacio funcionaría igual.',
    ejemplo: 'Propones algo en el chat del equipo. Silencio. Diez minutos después alguien más dice algo parecido y recibe tres respuestas entusiastas. No es que tu idea fue peor — es que tu voz no tiene el mismo peso en ese espacio.',
  },
  mito_talento: {
    titulo: '¿Por qué el talento "natural" es un mito en tech?',
    explicacion: 'Programar, diseñar sistemas o analizar datos son habilidades que se aprenden con práctica, contexto y recursos. La idea de que hay personas que "nacen" sabiéndolo oculta que algunas personas tuvieron acceso a computadoras desde niñas, a padres en el rubro, a escuelas con buenos programas. Eso no es talento natural — son condiciones de partida distintas.',
    ejemplo: 'Dos personas entran a la misma carrera. Una creció con computadora en casa, su papá es ingeniero y tomó cursos desde los 12 años. La otra no tuvo computadora hasta la prepa. La "brecha de talento" que parece existir al inicio es en realidad una brecha de acceso y exposición previa — no de capacidad.',
  },
}
