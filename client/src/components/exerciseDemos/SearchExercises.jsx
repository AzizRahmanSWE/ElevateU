import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { fetchData, exerciseOptions } from '../../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  
  // contains empty dependency array.
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
    // called when the app loads.
    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      // console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
    // after search clear searchData.
    setSearch('')
    setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
      
      <Typography 
        fontWeight={700} 
        sx={{ fontSize: { lg: '44px', xs: '30px' }}} 
        mb="49px" 
        textAlign="center"
        color="#F2F2F2"
        fontFamily="Open Sans"
      >
        Awsome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px" >
        <TextField 
          height="76px"
          sx={{ 
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, 
            backgroundColor: '#fff', 
            borderRadius: '10px'
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn' 
          sx={{ 
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '61px',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
      <HorizontalScrollbar 
        data={bodyParts} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      </Box>
    </Stack>
  )
}

export default SearchExercises;