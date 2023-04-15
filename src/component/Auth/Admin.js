import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminAuthRequest } from '../../api-helpers/api-helpers'
import { adminActions } from '../../store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Admin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const onResReceieved = (data) =>{
    console.log(data)
    dispatch(adminActions.login())
    localStorage.setItem("adminId" , data.id)
    localStorage.setItem("token" , data.token)
    navigate("/")
  }
  const getData = (data) =>{
    console.log("Admin" , data)
    sendAdminAuthRequest(data.inputs)
    .then(onResReceieved)
    .catch((err)=>console.log(err))
      }
  return (
    <div>
        <AuthForm onSubmit={getData} isAdmin={false}/>
    </div>
  )
}

export default Admin
