/**
 * Contenido de los modales de barreras — compartido entre los dos caminos.
 * Los datos de sub cambian por camino (en estudiantes.ts / profesionistas.ts)
 * pero el detalle del modal es el mismo concepto.
 */
import type { BarreraDetalle } from './types'

export const detalleBarreras: Record<string, BarreraDetalle> = {
  genero: {
    que: 'Pasa cuando se asume que ciertas tareas técnicas o roles de liderazgo son más adecuados para hombres, y las tareas de soporte o presentación para mujeres — sin que nadie lo decida explícitamente.',
    ejemplo: 'En un proyecto escolar o laboral, los hombres quedan en backend y arquitectura, y las mujeres en diseño, documentación o presentación. Nadie lo habló, simplemente "pasó".',
    senal: 'Notas que, proyecto tras proyecto o equipo tras equipo, los roles siguen el mismo patrón. No es aleatoria la distribución.',
  },
  edad: {
    que: 'La idea de que a menor tiempo de experiencia, menos vale lo que dices — aunque lo que digas sea técnicamente correcto.',
    ejemplo: 'Una persona junior propone una solución más eficiente, pero el equipo espera a que el senior la valide antes de considerarla. La misma idea, diferente peso.',
    senal: 'Tus propuestas se toman en cuenta solo después de que alguien con más antigüedad las repite o avala.',
  },
  institucion: {
    que: 'El prestigio de dónde estudiaste o dónde trabajaste antes se usa como proxy de tu capacidad, en lugar de evaluar lo que sabes hacer.',
    ejemplo: 'En una entrevista o en una junta, alguien de una universidad "reconocida" o de una empresa "grande" recibe más beneficio de la duda que alguien de bootcamp o escuela pública, aunque tengan el mismo conocimiento.',
    senal: 'Lo primero que preguntan no es qué sabes, sino dónde estudiaste o dónde trabajaste antes.',
  },
  acento: {
    que: 'Reuniones, documentación o decisiones importantes se hacen en inglés o en un registro técnico que no todas las personas dominan igual — lo que excluye a quienes no tuvieron acceso al idioma desde niñas.',
    ejemplo: 'Las reuniones con stakeholders o clientes se hacen en inglés. Quienes no lo hablan con fluidez participan menos, aunque tengan las mejores ideas técnicas.',
    senal: 'Hay personas en el equipo que hablan menos en ciertos espacios. Si preguntas, suele ser por el idioma o el registro, no por falta de conocimiento.',
  },
  trayectoria: {
    que: 'Haber trabajado en una empresa "grande" o "conocida" se usa como señal de calidad, independientemente de lo que esa persona hizo ahí.',
    ejemplo: '"Fue de Google" o "hizo su maestría en el MIT" — eso solo ya posiciona a alguien como voz autorizada, aunque su experiencia específica no sea la más relevante para este proyecto.',
    senal: 'En las reuniones, las personas escuchadas con más atención son las que tienen ciertas instituciones o empresas en el CV, aunque no sean las más expertas en el tema.',
  },
  jerarquia: {
    que: 'La opinión del senior, del manager o del profesor se toma como correcta por defecto, lo que inhibe que otras personas aporten o señalen errores.',
    ejemplo: 'El tech lead propone una arquitectura que tiene problemas obvios. Nadie dice nada porque "él tiene más experiencia". Al final, los problemas aparecen y quienes los vieron desde el principio se quedan calladas.',
    senal: 'En tu equipo o clase, corregir a alguien con más experiencia o jerarquía se siente arriesgado, aunque tengas razón.',
  },
  procesamiento: {
    que: 'Los entornos de tech suelen estar diseñados para personas que procesan de una sola manera: reuniones largas sin agenda, instrucciones verbales rápidas, multitarea constante, espacios ruidosos. Quien necesita algo diferente queda en desventaja.',
    ejemplo: 'Una persona que necesita instrucciones escritas, tiempo de procesamiento antes de responder, o un ambiente sin interrupciones para concentrarse — en un equipo que opera al contrario, parece "lenta" o "difícil", aunque su trabajo sea excelente.',
    senal: 'Necesitas condiciones específicas para rendir bien y eso ha generado comentarios, fricción o vergüenza, en lugar de simplemente ajustarse.',
  },
}
