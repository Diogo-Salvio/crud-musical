import { Container, Box, Typography, Card, TextField, Button } from "@mui/material"
import { useState } from "react"



const AddMusic = ({ setMusics }) => {

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

    function extractYouTubeID(urlString) {
        if (!urlString) return null;

        // Trim e garantir protocolo para new URL()
        let input = urlString.trim();
        if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(input)) {
            input = 'https://' + input; // facilita aceitar "youtu.be/ID" ou "www.youtube.com/..."
        }
        try {
            const url = new URL(input);
            const hostname = url.hostname.replace(/^www\./i, '').toLowerCase();

            let id = null;
            const pathSegments = url.pathname.split('/').filter(Boolean); // remove segs vazios
            // youtu.be/ID
            if (hostname === 'youtu.be') {
                id = pathSegments[0]; // primeiro segmento
            }
            // youtube.com subdomínios
            else if (hostname === 'youtube.com' || hostname.endsWith('.youtube.com')) {
                // watch?v=ID
                id = url.searchParams.get('v');
                // /shorts/ID
                if (!id && pathSegments[0] === 'shorts') id = pathSegments[1];
                // /embed/ID or /v/ID
                if (!id) {
                    const embedIdx = pathSegments.indexOf('embed');
                    const vIdx = pathSegments.indexOf('v');
                    if (embedIdx !== -1 && pathSegments[embedIdx + 1]) id = pathSegments[embedIdx + 1];
                    else if (vIdx !== -1 && pathSegments[vIdx + 1]) id = pathSegments[vIdx + 1];
                }
            }
            // Validate ID (YouTube IDs geralmente têm 11 caracteres [A-Za-z0-9_-])
            if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) return id;
            return null;
        } catch {
            return null;
        }
    }

    const sendMusic = () => {
        const newMusicKeys = Object.values(newMusic)
        const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:.*[?&]v=)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[&?#].*)?$/;

        if (!newMusicKeys[0].trim()) {
            alert('A música precisa de um titulo')
        } else if (!youtubeRegex.test(newMusicKeys[1].trim())) {
            alert('Insira um link válido!')
        } else {
            const videoId = extractYouTubeID(newMusicKeys[1].trim())
            const newMusicId = { ...newMusic, id: Date.now(), videoId }
            setMusics((prev) => [...prev, newMusicId])
            setNewMusic({ musicName: "", musicLink: "" })
        }

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
                        sx={{ marginTop: "20px" }}>Adicionar</Button>


                </Card>
            </Box>
        </Container>
    )
}

export default AddMusic