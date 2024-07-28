import React from 'react'
import { course } from '../types/course'
import { Box } from '@mui/material'
import CourseCard from './CourseCard'

export default function CourseCarousel({ courses }: {courses: course[]}) {
  return (
    <Box
          sx={{
            display: 'flex',
            overflow: 'auto',
            height: '30rem',
            gap: 2,
            pb: 15,
            px: 5,
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
        {courses.map((course: course, index: number) => <CourseCard key={index} course={course} /> )}

        </Box>
  )
}
