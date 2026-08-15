import type { UserResponses, PerfilAdaptativo, AdaptacionPerfil } from './types'

/**
 * Deriva el perfil adaptativo a partir de las respuestas acumuladas.
 * Se llama al llegar al resultado final.
 */
export function derivarPerfil(r: UserResponses): PerfilAdaptativo {
  const eval1 = r.eval1 ?? 3
  const eval2 = r.eval2 ?? 3

  // Señales fuertes: no puede nombrar Y hay dudas de si es real
  if (eval1 <= 2 && eval2 <= 2 && r.m2EsEstructural === false) {
    return 'sin_palabras'
  }

  // Duda si exagera: eval media-baja, no identifica estructura
  if ((eval1 <= 3 || eval2 <= 2) && !r.m2EsEstructural) {
    return 'duda_si_es_real'
  }

  // Ya lo nombra pero quiere actuar
  if (eval1 >= 4 || r.m3SeIdentifica) {
    return 'lista_para_actuar'
  }

  return 'duda_si_es_real'
}

/**
 * Devuelve el contenido personalizado según el perfil.
 */
export function adaptacionParaPerfil(
  perfil: PerfilAdaptativo,
  camino: 'est' | 'pro' | 'prepa'
): AdaptacionPerfil {
  const esStu = camino === 'est' || camino === 'prepa'

  const adaptaciones: Record<PerfilAdaptativo, AdaptacionPerfil> = {
    sin_palabras: {
      mensajeApertura: `Está bien no tener las palabras todavía. Esa es exactamente la razón por la que existe esta guía. Lo que viviste es real, aunque aún no sepas cómo nombrarlo. El lenguaje para hablar de estas experiencias lleva tiempo construirse — y no tienes que hacerlo sola.`,
      enfasisModulos: [4, 5],  // conceptos y mito del genio
      ctaUrgente: false,
      sugerenciaRuta: 'Habla con alguien de confianza',
    },
    duda_si_es_real: {
      mensajeApertura: `Si llegaste con la duda de si estás exagerando — no estás. Esa duda en sí misma es significativa. Muchas personas en ${esStu ? 'carreras' : 'equipos'} de tech pasan meses o años preguntándose si lo que sienten es válido. Lo es.`,
      enfasisModulos: [2, 3],  // ¿es estructural? + dinámicas
      ctaUrgente: false,
      sugerenciaRuta: 'Ponlo por escrito',
    },
    lista_para_actuar: {
      mensajeApertura: `Ya lo nombraste. Eso no es poca cosa — mucha gente no llega aquí. Ahora el siguiente paso es pensar qué quieres hacer con eso, a tu ritmo y con lo que tienes disponible.`,
      enfasisModulos: [6],  // rutas de acción
      ctaUrgente: false,
      sugerenciaRuta: 'Mira si te pasó solo a ti',
    },
    necesita_urgente: {
      mensajeApertura: `Lo que describes suena a algo que merece más que una guía. No porque estés en crisis, sino porque hay situaciones que se piensan mejor acompañadas. Si sientes que algo está afectando tu bienestar o tus decisiones, hay una ruta directa disponible.`,
      enfasisModulos: [7],  // mentoría
      ctaUrgente: true,
      sugerenciaRuta: 'Pide una sesión de mentoría',
    },
  }

  return adaptaciones[perfil]
}
