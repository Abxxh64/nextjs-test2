import { Box, Typography, Grid, Paper, Divider } from '@mui/material'
import { feature } from '../types/feature'
// import PaymentIcon from '@mui/icons-material/Payment';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CollectionsIcon from '@mui/icons-material/Collections';

type props = {
  title: string,
  heading: string,
  text: string,
  backgroundColor: string
  features: feature[]
}


export default function FeaturesBlock({ title, heading, text, backgroundColor, features }: props) {

  return (
    <Box display={'flex'} flexDirection={'column'} bgcolor={`#${backgroundColor}`} px={20} py={10}>
      
        <Box display={'flex'} flexDirection={'column'} maxWidth={'30rem'}>
            <Typography variant="body1" color={'primary'} fontWeight={'bold'} gutterBottom>
              {title}
            </Typography>
            <Typography variant="h3" color={'secondary'} fontWeight={'bold'} gutterBottom>
              {heading}
            </Typography>
            <Typography fontSize={15} color={'text.secondary'}>
              {text}
            </Typography>
        </Box>

        <Grid container spacing={4} sx={{mt: 8}}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={0}
              sx={{ height:'17rem', bgcolor: 'primary.light', p: 5, borderRadius: 0, boxShadow: '0px 18px 18px rgba(0, 0, 0, 0.08)'}}>
               <Box
                  sx={{
                    width: '4.5rem',
                    height: '4.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 3, 
                    mb: 2
                  }}
                >
                  <img src={feature.featureIcon.url}
                        alt={`${feature.featureIcon.alt} icon`}
                        style={{ maxWidth: '65%', maxHeight: '65%' }} />
                </Box>
              <Typography variant="body1" fontWeight={'bold'} gutterBottom>{feature.featureName}</Typography>
              <Divider sx={{ width: '15%', height: 2, my: 2, backgroundColor: '#E74040' }} />
              <Typography fontSize={15} color={'text.secondary'}>{feature.featureDescription}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

  </Box>
  )
}
