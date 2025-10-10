import { useEffect, useState } from 'react'
import './App.css'
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import AddMusic from './components/AddMusic'
import Header from './components/Header'
import MusicList from './components/MusicList'
import AdiminTab from './components/AdminTab'



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
              <Tab label="Sugerir uma Música" value="1" />
              <Tab label="Painel do Admin" value="2" />
            </TabList>
          </Box>
          <TabPanel value="0"><MusicList  musics={musics} setMusics={setMusics}/></TabPanel>
          <TabPanel value="1"><AddMusic setMusics={setMusics}/></TabPanel>
          <TabPanel value="2"><AdiminTab /></TabPanel>
        </TabContext>
      </Box>



    </>
  )
}

export default App
