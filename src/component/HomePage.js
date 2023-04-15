import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MoviesItems from './Movies/MoviesItems'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers'
import { useState } from 'react'


const HomePage = () => {
    const[movies , setMovies] = useState([]);
    useEffect(()=>{
    getAllMovies()
    .then((data) => setMovies(data.movies))
    .catch((err) => console.log(err))
    },[])
    console.log(movies)
  return (
    <Box width = {"100%"} height = "100%" margin = "auto"  marginTop = {2}>
    <Box margin = "auto" width = {"80%"} height = "40vh" padding = {2}>
   <img src='https://www.thestatesman.com/wp-content/uploads/2022/06/maxresdefault-1-1.jpg' 
    width={'100%'}
   height={'100%'}
   />
    </Box>
<Box padding={5} margin='auto'>
<Typography variant='h4' textAlign={'center'}>Latest Released Movies</Typography>
</Box>

<Box marginLeft={"8%"} display="flex" justifyContent="center" width = "80%" flexWrap={"wrap"}>
{movies && movies.slice(0 , 4).map((movie , index)=><MoviesItems id={movie.id} title ={movie.title}  posterUrl = {movie.posterUrl} releaseDate = {movie.releaseDate}key = {index}/>)}
</Box>
<Box display= "flex" padding={5} margin={"auto"}>
    <Button LinkComponent={Link} to = "/movies" variant='outlined' sx={{margin : "auto" , color : "#2b2d42"}}>
 View All Movies
   
    </Button>
</Box>
    </Box>
  )
}

export default HomePage
