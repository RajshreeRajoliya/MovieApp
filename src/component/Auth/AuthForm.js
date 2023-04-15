import { Dialog, FormLabel, TextField, Typography , Box , Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Link} from 'react-router-dom';

const lableStyle = {mt : 1 , mb : 1}
const AuthForm = ({onSubmit , isAdmin}) => {
    const[isSignup , setisSignup] = useState(false);
    const[inputs , setInputs] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleChange = (e) =>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs)
        onSubmit({inputs , signup : isAdmin ? false : isSignup})
    }
  return (
    <Dialog PaperProps={{style : {borderRadius : 20}}} open = {true}>
    <Box sx={{ml : "auto" , padding : 1}}>
        <IconButton LinkComponent={Link} to="/">
            <CloseRoundedIcon/>
        </IconButton>
    </Box>
        <Typography variant = "h4" textAlign = "center">
        {isSignup ? "SignUp" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box  display="flex" padding={6}  justifyContent="center" flexDirection = "column" width = {400} margin = "auto" alignContent = "center">

           {!isAdmin && isSignup && <> <FormLabel  sx={{lableStyle}}> Name  </FormLabel>
            <TextField value = {inputs.name} onChange={handleChange} margin = "normal" variant = "standard" type = {'text'} name = "name"/> </>}

            <FormLabel  sx={{lableStyle}}>  Email   </FormLabel>
            <TextField value = {inputs.email} onChange={handleChange} margin = "normal" variant = "standard" type = {'email'} name = "email"/>

            <FormLabel  sx={{lableStyle}}>Password</FormLabel>
            <TextField value = {inputs.password} onChange={handleChange} margin = "normal" variant = "standard" type = {'password'} name = "password"/>

<Button sx={{mt : 2 , borderRadius : 10 , bgcolor : "#2b2d42"}} type="submit" fullWidth variant = "contained">
{isSignup ? "SignUp" : "Login"}
</Button>


{!isAdmin && <Button sx={{mt : 2 , borderRadius : 10 }}  fullWidth onClick={()=>setisSignup(!isSignup)} >Switch To {isSignup ? "Login" : "SignUp"} </Button>}
            </Box>
        </form>
    </Dialog>
  )
}

export default AuthForm
