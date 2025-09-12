import { Box, Container, Typography } from '@mui/material'

const Header = () => {
    return (
        <Container sx={{
            backgroundImage: `url('assets/music-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            position:'relative'

        }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.7)",
                    zIndex: 1,
                }}
            >
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '300px'
                }}>
                    <Typography variant='h4' component="h1" color='white'>Faça a sua própria Playlist</Typography>
                    <Typography variant="h5" component='h2' color="white" mt='10px'>Monte do seu jeito com suas músicas preferidas</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Header