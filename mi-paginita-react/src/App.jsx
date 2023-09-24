
// import './App.css'
import { useState } from 'react'
import CarrouselApp from './components/CarrouselApp'
import NavBarApp from './components/NavBarApp'

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarFondo =()=>{
    setModoOscuro(!modoOscuro);
  }

  return (
    <>
    <NavBarApp modoOscuro={modoOscuro} cambiarFondo={cambiarFondo} />
    <CarrouselApp />
    </>
  )
}

export default App
