import { Card, CardContent, Typography, IconButton, Box, TextField, CardMedia } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react"


const MusicCard = ({ musicLink, musicName, id, videoId, setMusics }) => {

    const [editState, setEditState] = useState(false)

    const handleDelete = () => {
        setMusics(prev => prev.filter(music => music.id !== id))
    }

    const handleChange = (event) => {
        setMusics((prev) => prev.map((music) => music.id === id ? { ...music, [event.target.name]: event.target.value } : music))
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

    const setChanges = () => {
        const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:.*[?&]v=)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[&?#].*)?$/;

        if (!musicName.trim()) {
            alert('A música precisa de um titulo')
        } else if (!youtubeRegex.test(musicLink.trim())) {
            alert('Insira um link válido!')
        } else {
            const newVideoId = extractYouTubeID(musicLink)
            setMusics((prev) => prev.map((music) => music.id === id ? {...music, videoId : newVideoId} : music))
            setEditState(false)
        }
    }

    const thumbVideo = `https://img.youtube.com/vi/${videoId}/0.jpg`

    return (
        <Card sx={{ width: "80%" }}>
            {editState ?
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <TextField
                                id="musicName"
                                name="musicName"
                                size="small"
                                value={musicName}
                                onChange={handleChange}
                            />
                            <TextField
                                id="musicLink"
                                name="musicLink"
                                size="small"
                                value={musicLink}
                                onChange={handleChange}
                            />
                        </Box>
                        <IconButton sx={{ color: '#2bff00ff' }}>
                            <CheckIcon onClick={setChanges} />
                        </IconButton>

                    </Box>
                </CardContent>
                :
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box sx={{ maxWidth: "180px" }}>
                            <CardMedia
                                sx={{
                                    height: 100,
                                    width: "100%",
                                    objectFit: "cover",
                                    borderRadius: "18px",
                                    aspectRatio: "16/9",
                                    marginBottom: "10px"
                                }}
                                component="img"
                                image={thumbVideo}
                                alt={musicName}
                            />
                            <Typography variant="h6" component="h5">
                                {musicName}
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton onClick={handleDelete} color="error">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={() => setEditState(true)}>
                                <EditIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </CardContent>}
        </Card>
    )
}


export default MusicCard