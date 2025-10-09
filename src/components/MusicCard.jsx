import { Card, CardContent, Typography, IconButton, Box, TextField} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react"


const MusicCard = ({ musicLink, musicName, id, setMusics }) => {

    const [editState, setEditState] = useState(false)

    const handleDelete = () => {
        setMusics(prev => prev.filter(music => music.id !== id))
    }

    const handleChange = (event) => {
        setMusics((prev) => prev.map((music) => music.id === id ? {...music, [event.target.name]: event.target.value} : music))
    }


    return (
        <Card sx={{ width: "80%" }}>
            {editState ?
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px"}}>
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
                            <CheckIcon onClick={() => setEditState(false)} />
                        </IconButton>

                    </Box>
                </CardContent>
                :
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box sx={{maxWidth: "180px"}}>
                            <Typography variant="h6" component="h5">
                                {musicName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {musicLink}
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