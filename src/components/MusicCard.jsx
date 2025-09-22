import { Card, CardContent, Typography } from "@mui/material"



const MusicCard = ({musicLink, musicName}) => {
    return (
        <Card sx={{ width: "80%" }}>
            <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" component="h5">
                    {musicName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {musicLink}
                </Typography>
            </CardContent>
        </Card >
    )
}


export default MusicCard