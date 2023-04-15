import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
const navigate = useNavigate();

  const dispatch = useDispatch();

  const onResReceieved = (data) =>{
console.log("lol" , data)
dispatch(userActions.login())
localStorage.setItem("userId" , data.id)
navigate("/")
  }

  const getData = (data) =>{
console.log("Auth" , data)
sendUserAuthRequest(data.inputs , data.signup)
.then(onResReceieved)

.catch((err)=> console.log(err))
  }

  return (
    <div>
    <AuthForm onSubmit={getData} isAdmin={false}/>
    </div>
  )
}

export default Auth
