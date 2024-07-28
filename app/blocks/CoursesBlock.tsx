import { Box, Typography } from '@mui/material'
import axios from 'axios';
import CourseCarousel from '../components/CourseCarousel';

type props = {
    title: string,
    heading: string,
    text: string,
    backgroundColor: string
}


export default async function CoursesBlock({ title, heading, text, backgroundColor }: props) {

  const courses = await fetchCourses();


  return (
    <Box display={'flex'} flexDirection={'column'} bgcolor={`#${backgroundColor}`}>

        <Box display={'flex'} flexDirection={'column'} maxWidth={'30rem'} mx={20} my={10}>
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
        
        <CourseCarousel courses={courses}></CourseCarousel>
    </Box>
  )
}


const fetchCourses = async () => {
  try {
    const response = await axios(`/api/courses?where[_status][equals]=published`);
    return response.data.docs;
  }

  catch (error) {
    console.error(error);
    return [];
  }

};
