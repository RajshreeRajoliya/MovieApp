import { Route , Routes } from "react-router-dom";


import HomePage from "./component/HomePage";
import Movies from "./component/Movies/Movies";
import Header from "./component/Header";
import Admin from "./component/Auth/Admin";
import Auth from "./component/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { userActions  , adminActions} from "./store";
import { useEffect } from "react";
import Booking from "./component/Bookings/Booking";
import UserProfile from "./Profile/UserProfile";
import AddMovie from "./component/Movies/AddMovie";
import AdminProfile from "./Profile/AdminProfile";

function App() {

  const dispatch = useDispatch();

  const isAdminLoggedin = useSelector((state)=>state.admin.isLoggedin)
  const isUserLoggedin = useSelector((state)=>state.user.isLoggedin)
  console.log("isAdminLoggedin" , isAdminLoggedin)
  console.log("isUserLoggedin" , isUserLoggedin)

  useEffect(()=>{
if(localStorage.getItem("userId")){
dispatch(userActions.login());
} else if(localStorage.getItem("adminId")){
  dispatch(adminActions.login());
}
  },[dispatch])

  return (
    <div>
   <Header/>
   <section>
   <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          {!isUserLoggedin && !isAdminLoggedin && (
            <>
              {" "}
              <Route path="/admin" element={<Admin />} />
              <Route path="/auth" element={<Auth />} />
            </>
          )}
          {isUserLoggedin && !isAdminLoggedin && (
            <>
              {" "}
              <Route path="/user" element={<UserProfile />} />
              <Route path="/booking/:id" element={<Booking />} />
            </>
          )}
          {isAdminLoggedin && !isUserLoggedin && (
            <>
              {" "}
              <Route path="/add" element={<AddMovie />} />
              <Route path="/user-admin" element={<AdminProfile />} />{" "}
            </>
          )}
        </Routes>
   </section>
    </div>
  );
}

export default App;
