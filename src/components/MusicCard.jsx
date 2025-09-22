import { Card, CardContent, Typography } from "@mui/material"



const MusicCard = ({musicLink, musicTitle}) => {
    return (
        <Card sx={{ width: "80%" }}>
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