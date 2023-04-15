import React, { useEffect, useState } from "react";
import {Box, ListItem, Typography , List, ListItemText} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getAdminById } from "../api-helpers/api-helpers";
const AdminProfile = () => {
  
   const[admin , setAdmin] = useState();
  useEffect(() => {
    getAdminById()
      .then((res)=> setAdmin(res.admin))
      .catch((err) => console.log(err));
  }, []);
 
  return (
  <Box display="flex" width = "100%">

<>
{admin && <Box flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"30%"} padding={2}>
  <AccountCircleIcon sx={{fontSize : "10rem" ,  textAlign : "center" , ml : 3}}/>


  <Typography mt = {1}  padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
    Email : {admin.email}
  </Typography>
</Box>}

{admin && admin.addedMovies.length > 0 &&  (<Box width={"70%"} display = {'flex'} flexDirection={'column'}>
  <Typography variant="h3" fontFamily={'verdana'} textAlign={'center'} padding={2}>Movies Added
  <Box margin={'auto'} display={'flex'} flexDirection={'column'} width={'80%'}>
<List>
  {admin.addedMovies.map((movie , index)=>(
    <ListItem sx={{bgcolor : "#00d386" , color : "white" , textAlign : "center" , margin : 1}}>

<ListItemText sx={{margin : "1" , width : "auto" , textAlign : "left"}}>
  Movie : {movie.title}
</ListItemText>



    </ListItem>
  ))}
</List>

  </Box>
  </Typography>
</Box>)}
</>


  </Box>
  );
};

export default AdminProfile;
