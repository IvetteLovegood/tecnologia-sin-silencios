import type { MentoriaFormData } from './types'

/**
 * Envía los datos de mentoría a Google Sheets via Apps Script.
 *
 * SETUP (una vez):
 * 1. Abre Google Sheets → Extensiones → Apps Script
 * 2. Pega el script de apps-script.js (en la carpeta docs/)
 * 3. Despliega como Web App: Ejecutar como "Yo", acceso "Cualquier persona"
 * 4. Copia la URL del deploy y pégala en APPS_SCRIPT_URL abajo
 */

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwxpQiSro2iwIsGtDNqFYEbx9v2v1A0ssmHqulJOKDvwN1QSpj9nGpvOiemA-PAmtsMFA/exec'

export async function enviarSolicitudMentoria(
  data: MentoriaFormData
): Promise<{ ok: boolean; error?: string }> {
  if (APPS_SCRIPT_URL === 'REEMPLAZAR_CON_URL_DEL_DEPLOY') {
    console.warn('Apps Script URL no configurada — modo simulación')
    // En desarrollo, simular envío exitoso
    await new Promise(r => setTimeout(r, 1000))
    return { ok: true }
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      // Apps Script necesita text/plain para evitar preflight CORS
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return { ok: true }
  } catch (err) {
    console.error('Error enviando a Apps Script:', err)
    return { ok: false, error: 'No se pudo enviar. Intenta de nuevo.' }
  }
}

/**
 * Convierte UserResponses + camino + perfil en un resumen legible
 * para mostrarle a la persona antes de que confirme compartirlo.
 */
export function resumirRespuestas(
  responses: import('./types').UserResponses,
  camino: string,
  perfil: string
): string[] {
  const lineas: string[] = []

  if (camino === 'est') lineas.push('Camino: Estudiante')
  else lineas.push('Camino: Profesionista en tech')

  if (responses.lenguaje) lineas.push(`Tecnología: ${responses.lenguaje}`)
  if (responses.etapaOrol) lineas.push(`Etapa/Rol: ${responses.etapaOrol}`)

  const e1 = responses.eval1
  if (e1) lineas.push(`Qué tan claro identificas lo que pasa: ${e1}/5`)

  if (responses.m1SiPasó !== undefined)
    lineas.push(`¿Algo del módulo 1 te pasó?: ${responses.m1SiPasó ? 'Sí' : 'No'}`)

  if (responses.m2EsEstructural !== undefined)
    lineas.push(`¿Lo ves como algo estructural?: ${responses.m2EsEstructural ? 'Sí' : 'No muy claro'}`)

  if (responses.m3SeIdentifica !== undefined)
    lineas.push(`¿Reconoció dinámicas del módulo 3?: ${responses.m3SeIdentifica ? 'Sí' : 'No'}`)

  if (responses.mitoGenio !== undefined)
    lineas.push(`¿El mito del genio resonó?: ${responses.mitoGenio ? 'Sí' : 'No'}`)

  const perfilTextos: Record<string, string> = {
    sin_palabras: 'Todavía buscando palabras para nombrarlo',
    duda_si_es_real: 'Con dudas de si lo que vivió es real',
    lista_para_actuar: 'Lista para pensar rutas concretas',
    necesita_urgente: 'Necesita acompañamiento directo',
  }
  lineas.push(`Perfil derivado: ${perfilTextos[perfil] ?? perfil}`)

  return lineas
}
