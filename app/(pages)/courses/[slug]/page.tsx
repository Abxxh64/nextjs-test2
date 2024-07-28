import { Box, Button, CardMedia, Rating, Typography } from '@mui/material';
import axios from 'axios'
import { notFound } from 'next/navigation';
import React from 'react'
import { FileDownloadOutlined, AccessAlarms, LibraryBooks } from '@mui/icons-material';
import { course } from '@/app/types/course';
import CourseDetailTabs from '../../../components/CourseDetailTabs';
import CourseCarousel from '../../../components/CourseCarousel';
import NextBreadcrumb from '../../../components/BreadCrumbs';

export default async function Course({ params }: {params: {slug: string}}) {
    const response = await getCourseAndOtherCourses(params.slug);

    if (!response) {
      notFound(); 
    }

    const { course, otherCourses } = response;

    if (!course) {
        notFound();
      }


  return (
    <Box display={"flex"} flexDirection={'column'}  px={6} py={2} mb={6}>
      <NextBreadcrumb courseName={course.courseName}/>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mb={2}
      >
        <Box flex={1} display={'flex'} alignItems={'center'}>
          <CardMedia
            component="img"
            image={course.courseImage.url}
            alt={course.courseImage.alt}
            sx={{objectFit: 'contain', maxHeight:'30rem' }}
          />
        </Box>


        <Box flex={1} display="flex" flexDirection="column" gap={1}>
          

            <Typography variant="h3" color={'text.primary'} fontWeight="bold">
              {course.courseName}
            </Typography>

          <Typography variant="h6" color={'primary'} gutterBottom>
            {course.department}
          </Typography>

          <Box display={'flex'} alignItems={'center'}>
            <Typography variant='h6' component='p' fontWeight={'bold'} color={'text.secondary'} mr={2}>
              {course.rating}
            </Typography>
            <Rating name="read-only" value={course.rating} precision={0.1} readOnly />
          </Box>

          <Typography variant="body1" color="text.secondary" mt={3}>
            Description:
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} 
          sx={{ wordBreak: 'break-word',display: '-webkit-box',
                                        WebkitLineClamp: 4,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'}}>
            {course.shortCourseDescription}
          </Typography>

          <Box display="flex" sx={{ mt: 2 }}>

            <FileDownloadOutlined fontSize={'medium'} sx={{ color: 'text.secondary', mr: 1}} />
            <Typography color={'text.secondary'} fontWeight={'bold'} sx={{fontSize: '1rem'}} gutterBottom>
              {course.sales} Sales
              </Typography>

          </Box>

          <Box display="flex" alignItems="center" >
            <LibraryBooks fontSize={'medium'} sx={{color: 'error.light'}}/>
            <Typography variant='body1' fontWeight={'bold'} color="text.secondary" sx={{ml: 1}}>
              Number of Lessons:
            </Typography>
            <Typography variant='body1' color="text.secondary" sx={{ml: 1}}>
              {course.numberofLessons} 
            </Typography>
          </Box>
        
          <Box display="flex" alignItems="center" >
            <AccessAlarms fontSize={'medium'} color='primary'/>
            <Typography variant='body1' fontWeight={'bold'} color="text.secondary" sx={{ml: 1}}>
              Duration:
            </Typography>
            <Typography variant='body1' color="text.secondary" sx={{ml: 1}}>
              {course.courseDuration} hours
            </Typography>
          </Box>
        

          <Box display="flex" alignItems="center" mt={3} mb={4}>
            <Typography variant='body1' fontWeight={'bold'} color="text.secondary" ml={0.5} mr={2}>
              Price: 
            </Typography>

            <Typography 
                    fontSize={'1.2rem'} 
                    fontWeight={'bold'} 
                    sx={{ color: course.discountedPrice ? 'text.disabled' : 'text.secondary',
                          textDecoration: course.discountedPrice ? 'line-through' : 'none'
                    }}>
                    ${course.coursePrice}
            </Typography>

            {course.discountedPrice && (
              <Typography fontSize={'1.2rem'} fontWeight={'bold'} color="success.light" ml={2}>
                ${course.discountedPrice}
              </Typography>
            )}
            
          </Box>

          <Button variant="contained" color="primary" sx={{textTransform: 'none'}}>
            <Typography  fontSize={'1.2rem'} fontWeight={'bold'}> 
              Enroll Now
            </Typography>
          </Button>
        </Box>
      </Box>
        
      <CourseDetailTabs description={course.courseDescription} content={course.courseContent} instructors={course.instructors} />

      {otherCourses.length > 0 && (
        <Box>
          <Typography fontSize={'1.2rem'} fontWeight={'bold'} color={'text.primary'} my={2}>Other Courses</Typography>
          <CourseCarousel courses={otherCourses}></CourseCarousel>
        </Box>
      )}


    </Box>
  );
}


export async function generateStaticParams() {
    const listingsReq = await axios('api/courses?where[_status][equals]=published')
    const listingsData = listingsReq.data;

    return listingsData.docs.map(({slug}: {slug: string}) => {
            return {slug: slug}
        })
  }
   

  async function getCourseAndOtherCourses(slug: string) {
    try {
      const courseResponse = await axios(`/api/courses?where[slug][equals]=${slug}&where[_status][equals]=published`);
      const otherCoursesResponse = await axios('/api/courses?where[_status][equals]=published'); 
  
      return {
        course: courseResponse.data.docs[0],
        otherCourses: otherCoursesResponse.data.docs.filter((item: course) => item.slug !== slug), // Exclude the current course
      };
    } catch (error) {
      console.error('Error fetching course data:', error);
      return null;
    }
  }