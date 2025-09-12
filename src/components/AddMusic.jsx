import { Container, Box, Typography, Card, TextField } from "@mui/material"
import { useState } from "react"



const AddMusic = ({musics , setMusics}) => {

    const [newMusic, setNewMusic] = useState({})

    

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
                    flexDirection:'column',
                    justifyContent: 'left',
                    alignItems: 'center',
                    padding: '20px',
                }}>
                    <Typography variant="body1">Nome da música:</Typography>
                    <TextField
                      id="musicName"
                      label="Digite aqui o nome da sua música"
                      value={}
                      onChange={}
                    />

                </Card>
            </Box>
        </Container>
    )
}

export default AddMusic