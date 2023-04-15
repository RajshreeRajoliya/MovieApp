import {configureStore, createSlice} from '@reduxjs/toolkit'

const userSclice = createSlice ({
    name : 'user',
    initialState : {isLoggedin : false},
    reducers : {
        login(state) {
            state.isLoggedin = true;
        },
        logout (state) {
            localStorage.removeItem("userId")
            state.isLoggedin = false;
        }
    }
});

const adminSlice  = createSlice({
    name : "auth",
    initialState : {isLoggedin : false},
    reducers : {
        login(state) {
            state.isLoggedin = true;
        },
        logout (state) {
            localStorage.removeItem("adminId")
            localStorage.removeItem("token")
            state.isLoggedin = false;
        }
    }
})

export const userActions = userSclice.actions;
export const adminActions = adminSlice.actions;

 const store = configureStore ({
    reducer : {
        user : userSclice.reducer,
        admin : adminSlice.reducer
    }
})

export default store;