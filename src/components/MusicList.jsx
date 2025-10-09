import MusicCard from "./MusicCard"
import { Box, Card, Container, Typography } from "@mui/material"



const MusicList = ({ musics, setMusics }) => {
    return (
        <Container maxWidth="sm">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'

            }}>
                <Typography variant="h5" component="h4">Suas Músicas:</Typography>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    textAlign: 'left',
                    alignItems: 'center',
                    padding: '20px',
                    width: "80%",
                    gap: "15px"
                }}>
                    {musics && musics.length > 0
                        ?
                        musics.map(music =>
                            <MusicCard musicLink={music.musicLink} key={music.id} musicName={music.musicName} id={music.id} setMusics={setMusics} videoId={music.videoId} />
                        )
                        :
                        <Typography variant="h6" component="h5">Você ainda não cadastrou nenhuma música</Typography>
                    }

                </Card>
            </Box>
        </Container>
    )
}


export default MusicList