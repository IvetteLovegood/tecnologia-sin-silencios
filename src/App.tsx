import { useState } from 'react'
import type { Camino, UserResponses } from './data/types'
import { estudiantes } from './data/estudiantes'
import { profesionistas } from './data/profesionistas'
import { preparatoria } from './data/preparatoria'
import { TopBar } from './components/TopBar/TopBar'
import { Home } from './pages/Home/Home'
import { Journey } from './pages/Journey/Journey'
import { Result } from './pages/Result/Result'

// 0=home, 1=contexto+eval, 2-8=módulos 1-7, 9=resultado
const TOTAL_STEPS = 9

export default function App() {
  const [step, setStep] = useState(0)
  const [camino, setCamino] = useState<Camino>('est')
  const [responses, setResponses] = useState<UserResponses>({})

  const data = camino === 'est' ? estudiantes : camino === 'prepa' ? preparatoria : profesionistas

  function handleSelect(c: Camino) {
    setCamino(c)
    setResponses({})
    setStep(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function updateResponses(patch: Partial<UserResponses>) {
    setResponses(prev => ({ ...prev, ...patch }))
  }

  function next() {
    setStep(s => Math.min(s + 1, TOTAL_STEPS))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function prev() {
    setStep(s => Math.max(s - 1, 0))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function reset() {
    setStep(0)
    setResponses({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <TopBar
        step={step}
        total={TOTAL_STEPS}
        caminoLabel={data.topLabel}
        caminoClass={data.topClass}
        onBack={prev}
        onHome={reset}
      />
      {step === 0 && <Home onSelect={handleSelect} />}
      {step >= 1 && step <= 8 && (
        <Journey
          data={data}
          step={step}
          camino={camino}
          responses={responses}
          onUpdate={updateResponses}
          onNext={next}
          onPrev={prev}
        />
      )}
      {step === 9 && (
        <Result
          data={data}
          camino={camino}
          responses={responses}
          onReset={reset}
        />
      )}
    </>
  )
}
