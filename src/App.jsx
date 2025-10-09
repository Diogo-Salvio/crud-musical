import { useEffect, useState } from 'react'
import './App.css'
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import AddMusic from './components/AddMusic'
import Header from './components/Header'
import MusicList from './components/MusicList'



function App() {

  const [musics, setMusics] = useState([{ musicName: "Let me Love You", musicLink: "www.google.com", id: 1, videoId: "euCqAq6BRa4" }])
  useEffect(() => {
    console.log(musics)
  })

  const [value, setValue] = useState("0")
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}  centered>
              <Tab label="Musicas adicionadas" value="0" />
              <Tab label="Adicionar uma Música" value="1" />
              <Tab label="Área do Admin" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1"><MusicList  musics={musics} setMusics={setMusics}/></TabPanel>
          <TabPanel value="2"><AddMusic setMusics={setMusics}/></TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>



    </>
  )
}

export default App
