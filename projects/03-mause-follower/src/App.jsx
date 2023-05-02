import { useEffect, useState } from "react"

const FollowMause = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() =>{
    console.log('efecto')

    //realizar la funcion para detectar el punto exacto del mause
    const handledMove = (event) =>{
      const {clientX, clientY} = event
      console.log('handledMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    // ver que funcion me va a detectar cuando se mueve el mause
    if (enabled){
      window.addEventListener('pointermove', handledMove)
    }

    //limpiar los eventos para que no se acumulen o dejen de correr 
    return () =>{
      window.removeEventListener('pointermove', handledMove)
    }
  }, [enabled])
  return(
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
         
      />
      <button onClick={()=>setEnabled(!enabled)}>
        {enabled ? 'Activar': 'Desactivar'} seguir el puntero
      </button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMause/>}
      <button onClick={()=>setMounted(!mounted)}>
        Togel mounted FollowMause component
      </button>
    </main>
  )
}

export default App
