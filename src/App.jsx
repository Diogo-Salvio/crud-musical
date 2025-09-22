import { useEffect, useState } from 'react'
import './App.css'
import AddMusic from './components/AddMusic'
import Header from './components/Header'
import MusicList from './components/MusicList'



function App() {

  const [musics, setMusics] = useState([{musicName: "Let me Love You", musicLink: "www.google.com"}])

  useEffect(() => {
    console.log(musics)
  })

  return (
    <>
      <Header />
      <AddMusic
        setMusics={setMusics}
      />
      <MusicList  musics={musics}/>
    </>
  )
}

export default App
