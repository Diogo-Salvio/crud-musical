import { Card } from "@mui/material"



const MusicCard = ({musicLink, musicTitle}) => {
    return (
        <Card>
            <CardContent sx={{ height: '100%' }}>
                <Typography variant="h5" component="div">
                    {musicTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {musicLink}
                </Typography>
            </CardContent>
        </Card >
    )
}


export default MusicCard