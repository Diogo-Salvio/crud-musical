import { useEffect, useState } from 'react'
import './App.css'
import AddMusic from './components/AddMusic'
import Header from './components/Header'
import MusicList from './components/MusicList'



function App() {

  const [musics, setMusics] = useState([])

  useEffect(() => {
    console.log(musics)
  })

  return (
    <>
      <Header />
      <AddMusic
        setMusics={setMusics}
      />
      <MusicList />
    </>
  )
}

export default App
