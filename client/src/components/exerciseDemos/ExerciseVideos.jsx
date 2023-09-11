import React from 'react'
import { Box, Stack, Typography} from '@mui/material'



const ExerciseVideos = ({ ExerciseVideos, name }) => {
  return (
    <Box sx={{ mt: { lg: '200px', xs: '20px' }}} p="20px">
      <Typography color="pink" variant="h4" mb="33px">
        Watch {name} Exercise Videos
      </Typography>
    </Box>
  )
}

export default ExerciseVideos