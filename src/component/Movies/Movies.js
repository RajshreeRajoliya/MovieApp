import { Typography , Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helpers/api-helpers';
import MoviesItems from './MoviesItems';

const Movies = () => {
  const[movies , setMovies] = useState();
  useEffect(()=>{
getAllMovies()
.then((data) => setMovies(data.movies))
.catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <Box margin={'auto'} marginTop = {4}>
   <Typography variant='h4' margin ="auto" padding={2} width="40%" bgcolor={"#900C3F"} color={"white"} textAlign={'center'}>
 Movies Of All Interest
   </Typography>
<Box width={"100%"} margin={"auto"} marginTop={5} display={"flex"} justifyContent={"flex-start"} flexWrap={"wrap"} marginLeft={2}>

{movies && movies.map((movie , index)=><MoviesItems key = {index} id = {movie._id} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} title={movie.title}/>)}

</Box>
      </Box>
    </div>
  )
}

export default Movies
