import { createReducer, createAction} from '@reduxjs/toolkit'

const fetchUserSuccess = createAction('fetchUserSuccess')
const fetchUserError = createAction('fetchUserError')
const isLoggedIn = createAction('islogged')
const logOut = createAction('logout')
const update_photo = createAction("update_photo")

const initialState = {}

const UserReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(fetchUserSuccess,(state, action) => {
        return state = action.payload
    })
    .addCase(fetchUserError,(state, action) => {
        return {
            error : action.payload 
        }
    })
    .addCase(isLoggedIn,(state, action) => {
        return {
            isLoggedIn : action.payload 
        }
    })
    .addCase(logOut,(state, action) => {
        sessionStorage.removeItem('user')
        return { }
    })
    .addCase(update_photo,(state,{payload}) => {
        state.profilepicture = payload
    })
})

export default UserReducer