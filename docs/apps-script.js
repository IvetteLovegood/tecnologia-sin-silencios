/**
 * Google Apps Script — Tecnología sin silencios
 * Recibe las solicitudes de mentoría y las guarda en Google Sheets.
 *
 * INSTRUCCIONES DE SETUP:
 * 1. Crea un Google Sheet nuevo con el nombre "Solicitudes de mentoría"
 * 2. Ve a Extensiones → Apps Script
 * 3. Borra el contenido del editor y pega TODO este script
 * 4. Guarda (Ctrl+S)
 * 5. Clic en "Implementar" → "Nueva implementación"
 *    - Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta de Google)
 *    - Quién tiene acceso: Cualquier persona
 * 6. Autoriza los permisos cuando te los pida
 * 7. Copia la URL del deploy
 * 8. Pégala en src/data/sendMentoria.ts donde dice REEMPLAZAR_CON_URL_DEL_DEPLOY
 */

const SHEET_NAME = 'Solicitudes'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    guardarEnSheet(data)
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function guardarEnSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)

  // Crear hoja con encabezados si no existe
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    sheet.appendRow([
      'Fecha y hora',
      'Nombre',
      'Correo',
      'WhatsApp',
      'Contactar por',
      'Qué busca en la sesión',
      '---',
      'Camino',
      'Perfil derivado',
      'Lenguaje / Tecnología',
      'Etapa / Rol',
      'Claridad inicial (eval1)',
      'Facilidad para explicar (eval2)',
      'Sabe qué hacer (eval3)',
      '¿Algo del módulo 1 le pasó?',
      '¿Lo ve como estructural?',
      '¿Reconoció dinámicas?',
      '¿El mito del genio resonó?',
    ])

    // Formato: encabezados en negrita y color
    const headerRange = sheet.getRange(1, 1, 1, 18)
    headerRange.setFontWeight('bold')
    headerRange.setBackground('#EDE8FA')
  }

  const timestamp = new Date(data.timestamp || new Date().toISOString())
    .toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })

  sheet.appendRow([
    timestamp,
    data.nombre || '',
    data.correo || '',
    data.whatsapp || '',
    data.contactoPor || '',
    data.queBusca || '',
    '---',
    data.camino || '',
    data.perfil || '',
    data.lenguaje || '',
    data.etapaOrol || '',
    data.eval1 != null ? data.eval1 : '',
    data.eval2 != null ? data.eval2 : '',
    data.eval3 != null ? data.eval3 : '',
    data.m1SiPasó != null ? (data.m1SiPasó ? 'Sí' : 'No') : '',
    data.m2EsEstructural != null ? (data.m2EsEstructural ? 'Sí' : 'No') : '',
    data.m3SeIdentifica != null ? (data.m3SeIdentifica ? 'Sí' : 'No') : '',
    data.mitoGenio != null ? (data.mitoGenio ? 'Sí' : 'No') : '',
  ])
}

// Función de prueba — ejecutar desde el editor para verificar que funciona
function probarScript() {
  const dataPrueba = {
    nombre: 'Prueba',
    correo: 'prueba@test.com',
    contactoPor: 'correo',
    queBusca: 'Probar que funciona',
    camino: 'Estudiante',
    perfil: 'duda_si_es_real',
    lenguaje: 'Python',
    etapaOrol: 'Últimos semestres',
    eval1: 3,
    eval2: 2,
    eval3: 2,
    m1SiPasó: true,
    m2EsEstructural: false,
    m3SeIdentifica: true,
    mitoGenio: true,
    timestamp: new Date().toISOString(),
  }
  guardarEnSheet(dataPrueba)
  Logger.log('Prueba completada — revisa el Sheet')
}
