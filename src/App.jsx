import { useState } from 'react'
import './App.css'
import AddMusic from './components/AddMusic'
import Header from './components/Header'



function App() {

  const [musics, setMusics] = useState([])

  return (
    <>
      <Header />
      <AddMusic
        musics={musics}
        setMusics={setMusics}
      />
    </>
  )
}

export default App
