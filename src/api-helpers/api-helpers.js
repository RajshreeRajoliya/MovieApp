import axios from 'axios';

export const getAllMovies = async()=>{
 const res = await axios.get("/movie").catch(err=>console.log(err))

 if(res.status !== 200){
    return console.log("No Data")
 }

 const data = await res.data;
 return data;
}

export const sendUserAuthRequest = async(data , signup)=>{
const res = await  axios
.post(`/user/${signup ? "signup" : "login"}`,{
   name : signup ?  data.name : "",
   email : data.email,
   password : data.password
})
.catch((err) => console.log(err))

if(res.status !== 200 && res.status !== 201){
console.log("Unexpected Error")
}

const resData = await res.data;
return resData;
}

export const sendAdminAuthRequest = async(data)=>{
const res = await axios.post("/admin/login" , {
   email : data.email,
   password : data.password
   
}).catch((err) => console.log(err))

if(res.status !== 200){
   return console.log("Unexpected Error")
}

const resData = await res.data;
return resData;
}

export const getMovieDetails = async(id)=>{
const res = await axios.get(`/movie/${id}`)
.catch(err=>console.log(err))

if(res.status !== 200){
   return console.log("Unexpected Error")
}
const resData = await res.data;
return resData;
}

export const newBookings = async(data)=>{
 const res = await  axios.post('/booking',{
  movie : data.movie,
  seatNumber : data.seatNumber,
  date : data.date,
  name : data.name,
  user : localStorage.getItem('userId')

   }).catch((err)=>console.log(err))

   if(res.status !== 200){
      return console.log("Unexpected error")
   }
   const resData = await res.data;
   return resData;
}


export const getUserBooking = async () => {
   const id = localStorage.getItem('userId');

   const res = await axios.get(`/user/bookings/${id}`)
   .catch((err)=>console.log(err))
    const userData=await axios.get(`/user/${id}`).catch((err)=>console.log(err));  
   if(res.status !== 200 && userData.status !==200){
      return console.log("Unexpected Error")
   }
   const resData = await res.data;
   const resUserData = await userData.data
   console.log("booking ka data ",resData,resUserData);
   return resData;
}

export const deleteBooking = async(id)=>{
 const res = await  axios.delete(`/booking/${id}`)
   .catch((err)=>console.log(err))

   if(res !== 200){
      console.log("Unexpected Error")
   }
   const resData = await res.data;
   return resData;
}


export const getUserDetails = async() =>{
   const id = localStorage.getItem('userId')
const res = await   axios.get(`/user/${id}`)
   .catch((err)=>console.log(err))

   if(res.status !== 200){
      return console.log("Unexpected Error")
   }
   const resData = await res.data;
   return resData;
}


export const addMovie = async (data) => {
   const res = await axios
     .post(
       "/movie",
       {
         title: data.title,
         description: data.description,
         releaseDate: data.releaseDate,
         posterUrl: data.posterUrl,
         fetaured: data.fetaured,
         actors: data.actors,
         admin: localStorage.getItem("adminId"),
       },
       {
         headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
       }
     )
     .catch((err) => console.log(err));
 
   if (res.status !== 201) {
     return console.log("Unexpected Error Occurred");
   }
 
   const resData = await res.data;
   return resData;
 };
 
 export const getAdminById = async () => {
   const adminId = localStorage.getItem("adminId");
   const res = await axios
     .get(`/admin/${adminId}`)
     .catch((err) => console.log(err));
 
   if (res.status !== 200) {
     return console.log("Unexpected Error Occurred");
   }
 
   const resData = await res.data;
   return resData;
 };
 