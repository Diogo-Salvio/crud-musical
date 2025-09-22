import { Card, CardContent, Typography, IconButton , Box} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";


const MusicCard = ({ musicLink, musicName, id, setMusics}) => {

    const handleDelete = () => {
            setMusics(prev => prev.filter (music => music.id !== id ))
    }

    return (
        <Card sx={{ width: "80%" }}>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                        <Typography variant="h6" component="h5">
                            {musicName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {musicLink}
                        </Typography>
                    </Box>
                    <IconButton onClick={handleDelete} color="error">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}


export default MusicCard