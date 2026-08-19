/**
 * Contenido de los modales de barreras.
 * El concepto ("que") es el mismo para los tres caminos, pero el ejemplo
 * y la señal se adaptan al contexto: estudiante universitaria, profesionista
 * o estudiante de secundaria/prepa.
 */
import type { BarreraDetalle, Camino } from './types'

export function getDetalleBarreras(camino: Camino): Record<string, BarreraDetalle> {
  const esPro = camino === 'pro'
  const esPrepa = camino === 'prepa'

  return {
    genero: {
      que: 'Pasa cuando se asume que ciertas tareas técnicas o roles de liderazgo son más adecuados para hombres, y las tareas de soporte o presentación para mujeres — sin que nadie lo decida explícitamente.',
      ejemplo: esPro
        ? 'En un proyecto de trabajo, los hombres quedan en backend y arquitectura, y las mujeres en diseño, documentación o presentación. Nadie lo habló, simplemente "pasó".'
        : esPrepa
        ? 'En un club de robótica o un taller de programación, a los chicos les toca operar el robot o escribir el código, y a las chicas la parte de diseño o de exponer el proyecto. Nadie lo decidió así, simplemente se acomodó.'
        : 'En un proyecto escolar, los hombres quedan en backend y arquitectura, y las mujeres en diseño, documentación o presentación. Nadie lo habló, simplemente "pasó".',
      senal: esPro
        ? 'Notas que, equipo tras equipo, los roles siguen el mismo patrón. No es aleatoria la distribución.'
        : esPrepa
        ? 'Notas que, taller tras taller o equipo tras equipo, los roles siguen el mismo patrón. No es aleatoria la distribución.'
        : 'Notas que, proyecto tras proyecto, los roles siguen el mismo patrón. No es aleatoria la distribución.',
    },
    edad: {
      que: 'La idea de que a menor tiempo de experiencia, menos vale lo que dices — aunque lo que digas sea técnicamente correcto.',
      ejemplo: esPro
        ? 'Una persona junior propone una solución más eficiente, pero el equipo espera a que el senior la valide antes de considerarla. La misma idea, diferente peso.'
        : esPrepa
        ? 'Alguien de secundaria propone una idea en un taller de tecnología, pero el grupo espera a que alguien mayor o "el que ya sabe" la valide antes de tomarla en serio. La misma idea, diferente peso.'
        : 'Una compañera de los primeros semestres propone algo distinto, pero el equipo espera a que alguien de semestres avanzados lo valide antes de considerarlo. La misma idea, diferente peso.',
      senal: esPro
        ? 'Tus propuestas se toman en cuenta solo después de que alguien con más antigüedad las repite o avala.'
        : 'Tus propuestas se toman en cuenta solo después de que alguien con más experiencia o edad las repite o avala.',
    },
    institucion: {
      que: 'El prestigio de dónde estudiaste o dónde trabajaste antes se usa como proxy de tu capacidad, en lugar de evaluar lo que sabes hacer.',
      ejemplo: esPro
        ? 'En una entrevista o en una junta, alguien de una universidad "reconocida" o de una empresa "grande" recibe más beneficio de la duda que alguien de bootcamp o escuela pública, aunque tengan el mismo conocimiento.'
        : esPrepa
        ? 'Entre compañeros de un taller o concurso, a quien viene de una escuela privada o ya tuvo computadora en casa desde niño se le asume automáticamente más capaz, aunque nunca lo hayan comprobado.'
        : 'En un equipo de proyecto, alguien de una escuela "reconocida" recibe más beneficio de la duda que alguien de escuela pública, aunque tengan el mismo conocimiento.',
      senal: esPro
        ? 'Lo primero que preguntan no es qué sabes, sino dónde estudiaste o dónde trabajaste antes.'
        : 'Lo primero que asumen de ti no es qué sabes hacer, sino de qué escuela vienes o si tuviste acceso a tecnología desde antes.',
    },
    acento: {
      que: 'Reuniones, documentación o decisiones importantes se hacen en inglés o en un registro técnico que no todas las personas dominan igual — lo que excluye a quienes no tuvieron acceso al idioma o al vocabulario desde niñas.',
      ejemplo: esPro
        ? 'Las reuniones con stakeholders o clientes se hacen en inglés. Quienes no lo hablan con fluidez participan menos, aunque tengan las mejores ideas técnicas.'
        : esPrepa
        ? 'En un concurso o curso de programación, los tutoriales y la documentación están en inglés. Quienes tuvieron clases de inglés desde chicas avanzan más rápido — no porque entiendan mejor el código, sino porque no batallan con el idioma.'
        : 'Las clases avanzadas o la documentación técnica están mayormente en inglés. Quienes no lo dominan con fluidez participan menos, aunque tengan las mejores ideas técnicas.',
      senal: 'Hay personas que hablan menos en ciertos espacios. Si preguntas, suele ser por el idioma o el registro, no por falta de conocimiento.',
    },
    trayectoria: {
      que: 'Haber tenido acceso previo — a una empresa "grande", a cursos avanzados, o a tecnología desde niña — se usa como señal de talento, en lugar de reconocerlo como una ventaja de acceso.',
      ejemplo: esPro
        ? '"Fue de Google" o "hizo su maestría en el MIT" — eso solo ya posiciona a alguien como voz autorizada, aunque su experiencia específica no sea la más relevante para este proyecto.'
        : esPrepa
        ? 'Un compañero ya programa desde los 12 años porque su papá es ingeniero y siempre tuvo computadora en casa. Eso se lee como "talento natural", cuando en realidad es acceso previo que otras personas no tuvieron.'
        : 'Quien ya llegó sabiendo programar por cursos previos o por tener papás en el rubro se percibe como "más talentosa", aunque solo tuvo más tiempo de práctica.',
      senal: esPro
        ? 'En las reuniones, las personas escuchadas con más atención son las que tienen ciertas instituciones o empresas en el CV, aunque no sean las más expertas en el tema.'
        : 'En el grupo, se escucha más a quien "ya sabía de antes", aunque nadie evaluó realmente quién entiende mejor el tema ahora.',
    },
    jerarquia: {
      que: 'La opinión de quien tiene más experiencia o autoridad se toma como correcta por defecto, lo que inhibe que otras personas aporten o señalen errores.',
      ejemplo: esPro
        ? 'El tech lead propone una arquitectura que tiene problemas obvios. Nadie dice nada porque "él tiene más experiencia". Al final, los problemas aparecen y quienes los vieron desde el principio se quedan calladas.'
        : esPrepa
        ? 'El maestro o "el que más sabe del grupo" propone una forma de resolver el ejercicio que tiene un error. Nadie lo corrige porque parece arriesgado. Al final el error se nota, y quien lo vio desde el principio se quedó callada.'
        : 'El líder del equipo o el profe proponen algo que tiene problemas obvios. Nadie dice nada porque "tiene más experiencia". Al final los problemas aparecen y quienes los vieron desde el principio se quedan calladas.',
      senal: esPro
        ? 'En tu equipo, corregir a alguien con más experiencia o jerarquía se siente arriesgado, aunque tengas razón.'
        : 'En tu equipo o clase, corregir a alguien con más experiencia o autoridad se siente arriesgado, aunque tengas razón.',
    },
    procesamiento: {
      que: 'Los entornos de tech suelen estar diseñados para personas que procesan de una sola manera: instrucciones verbales rápidas, multitarea constante, espacios ruidosos. Quien necesita algo diferente queda en desventaja.',
      ejemplo: esPro
        ? 'Una persona que necesita instrucciones escritas, tiempo de procesamiento antes de responder, o un ambiente sin interrupciones para concentrarse — en un equipo que opera al contrario, parece "lenta" o "difícil", aunque su trabajo sea excelente.'
        : 'Una persona que necesita instrucciones escritas, más tiempo antes de responder, o un ambiente sin ruido para concentrarse — en un espacio que opera al contrario, parece "lenta" o "distraída", aunque su trabajo sea excelente.',
      senal: 'Necesitas condiciones específicas para rendir bien y eso ha generado comentarios, fricción o vergüenza, en lugar de simplemente ajustarse.',
    },
  }
}
