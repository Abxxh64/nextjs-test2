import { FavoriteBorderOutlined, ShoppingCartOutlined, Visibility, FileDownloadOutlined, ArrowForwardIosOutlined, Star } from '@mui/icons-material';
import { Box, Typography, Card, CardContent, Button, IconButton } from '@mui/material'
import { course } from '../types/course';
import Link from 'next/link';

export default function CourseCard({course}: {course: course}) {
  return (
    <Card sx={{width: '32rem', display: 'flex', flex: '0 0 auto'}}>

              <Box
                sx={{
                  width: '40%',
                  background: `url(${course.courseImage.url}) no-repeat center center`,
                  backgroundSize: 'cover',
                  position: 'relative',
                  overflow: 'hidden',
                  p:2
                }}
              >
                {course.discountedPrice && (
                  <Box bgcolor="#E74040" maxWidth={'30%'} justifyContent={'center'} display={'flex'} borderRadius={1}>
                    <Typography variant="body2" color={'white'} >
                        Sale
                    </Typography>
                  </Box> 
                )}

                <Box sx={{  position: 'absolute',
                    bottom: 10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1}}>

                  <IconButton size="small" sx={{backgroundColor: 'white', color: 'common.black'}}>
                    <FavoriteBorderOutlined />
                  </IconButton>
                  <IconButton size="small" sx={{backgroundColor: 'white', color: 'common.black' }}>
                    <ShoppingCartOutlined />
                  </IconButton>
                  <IconButton  size="small" sx={{backgroundColor: 'white', color: 'common.black'}}>
                    <Visibility />
                  </IconButton>
                </Box>

              </Box>

              <CardContent sx={{ width: '60%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                
                <Box display={'flex'} mb={3} justifyContent={'space-between'}>
                    <Typography variant="body2" color={'primary'} fontWeight={'bold'} >
                        {course.department}
                    </Typography>
                    
                    <Box bgcolor={'secondary.main'} display={'flex'} borderRadius={3} alignItems={'center'} px={1} py={0.2}>
                        <Star fontSize="small" sx={{ color: '#fdd835', mr: 0.5}} />
                        <Typography variant="body2" fontWeight={'light'} color={'white'}>{course.rating}</Typography>
                    </Box>
                </Box>

                <Typography sx={{fontSize: 18}} color={'secondary'} fontWeight={'bold'} gutterBottom>
                  {course.courseName}
                </Typography>
                <Typography variant='body2' color={'text.secondary'} sx={{ height: '30%', display: '-webkit-box',
                                                                                          WebkitLineClamp: 3,
                                                                                          WebkitBoxOrient: 'vertical',
                                                                                          overflow: 'hidden',
                                                                                          textOverflow: 'ellipsis'}} gutterBottom>
                  {course.shortCourseDescription}
                </Typography>

                <Box display="flex" alignItems="center" sx={{ mt: 2 }}>

                  <FileDownloadOutlined fontSize="small" sx={{ color: 'text.secondary', mr: 1, mb: 0.5}} />
                  <Typography variant="body2" color={'text.secondary'} fontWeight={'bold'} gutterBottom>
                    {course.sales} Sales
                    </Typography>

                </Box>


                <Box display="flex" alignItems="center" sx={{ mt: 1 }}>

                  <Typography 
                    variant="body2" 
                    fontWeight={'bold'} 
                    sx={{ color: course.discountedPrice ? 'text.disabled' : 'text.secondary',
                          textDecoration: course.discountedPrice ? 'line-through' : 'none'
                    }}>
                    ${course.coursePrice}
                    </Typography>
                  {course.discountedPrice && (
                    <Typography  variant="body2"  fontWeight={'bold'} sx={{ color: '#40BB15', ml: 3 }}>
                      ${course.discountedPrice}
                    </Typography>
                  )}

                </Box>


                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>

                  <Box display="flex" alignItems="center" >
                    <img src='/clock-icon.svg'></img>
                    <Typography fontSize={13} color="text.secondary"sx={{ml: 1}}>{course.courseDuration} hrs</Typography>
                  </Box>

                  <Box display="flex" alignItems="center">
                  <img src='/lessons-icon.svg'></img>
                    <Typography fontSize={13} color="text.secondary" variant="body2" sx={{ml: 1}}>{course.numberofLessons} Lessons</Typography>
                  </Box>
                  
                  <Box display="flex" alignItems="center">
                    <img src='/progress-chart.svg'></img>
                    <Typography fontSize={13} color="text.secondary" variant="body2" sx={{ml: 1}}>progress</Typography>
                  </Box>

                </Box>

                <Link href={`/courses/${course.slug}`} passHref>
                
                  <Button variant="outlined" color="primary" 
                    endIcon={<ArrowForwardIosOutlined />} 
                    sx={{width: '60%', textTransform: 'none', borderWidth: 2, borderRadius: 6, mt: 'auto', mb: 2, py: 1}} >
                    Learn More
                  </Button>
                </Link>

              </CardContent>
            </Card>
  )
}
