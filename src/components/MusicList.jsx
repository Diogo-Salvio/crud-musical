import MusicCard from "./MusicCard"
import { Box, Card, Container, Typography } from "@mui/material"



const MusicList = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'

            }}>

                <Typography variant="h5" component="h4">Suas Músicas: </Typography>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    textAlign: 'left',
                    alignItems: 'center',
                    padding: '20px',
                    width: "80%"
                }}>
                    <MusicCard musicLink={"www.google.com"} musicTitle={"Google"} />
                </Card>
            </Box>
        </Container>
    )
}


export default MusicList