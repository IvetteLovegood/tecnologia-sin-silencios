export type Camino = 'est' | 'pro'

// ─── Respuestas de la persona usuaria ────────────────────────────────────────

export interface UserResponses {
  // Contexto inicial
  lenguaje?: string
  etapaOrol?: string

  // Evaluación emocional inicial (escala 1-5)
  eval1?: number
  eval2?: number
  eval3?: number

  // Señales de módulos (true = "sí, me pasó / me resuena")
  m1SiPasó?: boolean
  m2EsEstructural?: boolean
  m3SeIdentifica?: boolean
  mitoGenio?: boolean

  // Evaluación final
  evalFinal?: number
  quiereMentoria?: boolean
}

// ─── Perfil adaptativo derivado de respuestas ────────────────────────────────

export type PerfilAdaptativo =
  | 'sin_palabras'      // eval < 2 en preguntas 1-2: no puede nombrar lo que vive
  | 'duda_si_es_real'   // duda si exagera, no tiene claro si es estructural
  | 'lista_para_actuar' // ya lo identificó, quiere rutas concretas
  | 'necesita_urgente'  // eval muy baja + señales fuertes, prioridad mentoría

// ─── Adaptación por perfil ───────────────────────────────────────────────────

export interface AdaptacionPerfil {
  mensajeApertura: string        // texto personalizado al inicio del resultado
  enfasisModulos: number[]       // módulos a destacar visualmente
  ctaUrgente: boolean            // mostrar CTA de mentoría más prominente
  sugerenciaRuta: string         // qué ruta de acción poner primera
}

// ─── Tipos de contenido ──────────────────────────────────────────────────────

export interface ChatMsg {
  av: string
  ini: string
  who: string
  ts: string
  txt: string
  gap?: boolean
}

export interface BarreraDetalle {
  que: string
  ejemplo: string
  senal: string
}

export interface BarreraCard {
  ico: string
  name: string
  sub: string
  detalle: BarreraDetalle
}

export interface QuestionDetalle {
  titulo: string
  explicacion: string
  ejemplo: string
}

export interface QuestionItem {
  texto: string
  detalle?: QuestionDetalle
}

export interface Ruta {
  t: string
  d: string
}

export interface ContextQuestion {
  id: string
  label: string
  type: 'select' | 'chips'
  options: string[]
}

// ─── Datos completos de un camino ────────────────────────────────────────────

export interface CaminoData {
  topLabel: string
  topClass: string

  contextQuestions: ContextQuestion[]

  evalQ1: string
  evalQ3: string

  m1Intro: string
  m1ChatIcon: string
  m1ChatName: string
  m1Chat: ChatMsg[]
  m1Qs: QuestionItem[]

  m2TestQ: string
  m2TestT: string
  m2Qs: QuestionItem[]

  m3Barreras: BarreraCard[]
  m3ChatIcon: string
  m3ChatName: string
  m3Chat: ChatMsg[]
  m3Qs: QuestionItem[]

  c1Label: string
  c1Ej: string
  c2Label: string
  c2Ej: string
  m4Qs: QuestionItem[]

  m5Rutas: Ruta[]
  m6Items: string[]

  resSubTxt: string
  resRutasLabel: string
  ctaTxt: string
}

// ─── Datos del formulario de mentoría ────────────────────────────────────────

export interface MentoriaFormData {
  // Contacto (lo que la persona llena)
  nombre: string
  correo: string
  whatsapp?: string
  contactoPor: 'correo' | 'whatsapp'
  queBusca: string

  // Contexto del recorrido (se envía automáticamente con consentimiento)
  camino: string
  lenguaje?: string
  etapaOrol?: string
  eval1?: number
  eval2?: number
  eval3?: number
  m1SiPasó?: boolean
  m2EsEstructural?: boolean
  m3SeIdentifica?: boolean
  mitoGenio?: boolean
  perfil: string
  timestamp: string
}
