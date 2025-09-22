import { Container, Box, Typography, Card, TextField, Button } from "@mui/material"
import { useState } from "react"



const AddMusic = ({ setMusics}) => {

    const [newMusic, setNewMusic] = useState({
        musicName: "",
        musicLink: ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target
        setNewMusic((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const sendMusic = () => {
        const newMusicId = {...newMusic, key: Date.now()}
        setMusics((prev) => [...prev, newMusicId])
        setNewMusic({musicName: "", musicLink: ""})
    }


    return (
        <Container maxWidth="sm">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
            }}>
                <Typography variant="h6" component="h3" mb='15px'>Adicione sua música:</Typography>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    textAlign: 'left',
                    alignItems: 'center',
                    padding: '20px',
                }}>
                    <Typography variant="body1" mb="20px">Nome da música:</Typography>
                    <TextField
                        id="musicName"
                        name="musicName"
                        label="Digite aqui o nome da sua música"
                        value={newMusic.musicName}
                        onChange={handleChange}
                    />

                    <Typography variant="body1" mb="20px" mt="20px">Link da Música:</Typography>
                    <TextField
                        id="musicName"
                        name="musicLink"
                        label="Digite aqui o nome da sua música"
                        value={newMusic.musicLink}
                        onChange={handleChange}
                    />

                    <Button 
                    variant="contained" 
                    onClick={sendMusic}
                    sx={{marginTop: "20px"}}>Adicionar</Button>


                </Card>
            </Box>
        </Container>
    )
}

export default AddMusic