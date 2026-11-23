import { useState } from 'react'
import { SettingsContext } from './SettingsContext'
import Notes from './components/Notes'
import Info from './components/Info'

function App() {
  const [largeText, setLargeText] = useState(false)
  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="John Chardy Q. Crayo" />
      </div>
    </SettingsContext>
  )
}
export default App