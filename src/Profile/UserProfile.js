import React, { useEffect, useState } from "react";
import { deleteBooking, getUserBooking , getUserDetails } from "../api-helpers/api-helpers";
import {Box, ListItem, Typography , List, ListItemText, IconButton} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Link, useNavigate} from 'react-router-dom'
 
const UserProfile = () => {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState();
   const[user , setUser] = useState();
  useEffect(() => {
    getUserBooking()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));


      getUserDetails()
      .then((res)=> setUser(res.user))
      .catch((err) => console.log(err));
  }, [bookings]);
  console.log(bookings);

  const handleDelete = (id) =>{
    deleteBooking(id).then((res)=>console.log(res))
    .catch((err) => console.log(err));
    navigate("/user")
  }

  return (
  <Box display="flex" width = "100%">

<>
{user && <Box flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"30%"} padding={2}>
  <AccountCircleIcon sx={{fontSize : "10rem" ,  textAlign : "center" , ml : 3}}/>

  <Typography padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
    Name : {user.name}
  </Typography>

  <Typography mt = {1}  padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
    Email : {user.email}
  </Typography>
</Box>}

{bookings &&  (<Box width={"70%"} display = {'flex'} flexDirection={'column'}>
  <Typography variant="h3" fontFamily={'verdana'} textAlign={'center'} padding={2}>Bookings
  <Box margin={'auto'} display={'flex'} flexDirection={'column'} width={'80%'}>
<List>
  {bookings.map((booking , index)=>(
    <ListItem sx={{bgcolor : "#00d386" , color : "white" , textAlign : "center" , margin : 1}}>

<ListItemText sx={{margin : "1" , width : "auto" , textAlign : "left"}}>
  Movie : {booking.movie.title}
</ListItemText>

<ListItemText sx={{margin : "1" , width : "auto" , textAlign : "left"}}>
  Seat : {booking.seatNumber}
</ListItemText>

<ListItemText sx={{margin : "1" , width : "auto" , textAlign : "left"}}>
  Date : {new Date(booking.date).toDateString()}
</ListItemText>

<IconButton onClick={()=>handleDelete(booking._id)} color = "error">
  <DeleteForeverIcon color = "red"/>
</IconButton>

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

export default UserProfile;
