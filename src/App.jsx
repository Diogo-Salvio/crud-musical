import { useEffect, useState } from 'react'
import './App.css'
import AddMusic from './components/AddMusic'
import Header from './components/Header'
import MusicList from './components/MusicList'



function App() {

  const [musics, setMusics] = useState([{musicName: "Let me Love You", musicLink: "www.google.com", id: 1, videoId: "euCqAq6BRa4"}])

  useEffect(() => {
    console.log(musics)
  })

  return (
    <>
      <Header />
      <AddMusic
        setMusics={setMusics}
      />
      <MusicList  musics={musics} setMusics={setMusics}/>
    </>
  )
}

export default App
