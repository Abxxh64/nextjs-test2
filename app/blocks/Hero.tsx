import { Box, Typography, Grid } from '@mui/material'

type props = {
  title: string,
  heading: string,
  text: string,
  backgroundColor: string,
  backgroundImage: {
    id: string,
    alt: string,
    filrname: string,
    mimetype: string,
    filesize: number,
    width: number,
    height: number,
    focalX: number,
    focalY: number,
    createdAt: string,
    updatedAt: string,
    url: string,
  }
}


export default function Hero({ title, heading, text, backgroundImage, backgroundColor }: props) {
  return (
    
    <Box display={'flex'} bgcolor={`#${backgroundColor}`}>
      <Grid container  spacing={2} pl={20} pt={3} pb={10}>
        <Grid item xs={12} md={5} mt={7}>
          <Typography variant="body1" color={'primary'} fontWeight={'bold'} gutterBottom>
            {title}
          </Typography>
          <Typography variant="h2" color={'secondary'} fontWeight={'bold'} gutterBottom>
            {heading}
          </Typography>
          <Typography fontSize={20} color={'text.secondary'} sx={{pr: 18}}>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} >
            <Box display={'flex'} justifyContent={'end'} pr={6}>
                {backgroundImage && <img src={backgroundImage.url} alt="header-pic" style={{ maxWidth: '33rem', maxHeight: '33rem' }} />}
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
