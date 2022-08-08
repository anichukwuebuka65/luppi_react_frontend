import { createReducer, createAction} from '@reduxjs/toolkit'

const fetchUser = createAction('fetchUser')
const fetchUserError = createAction('fetchUserError')
const isLoggedIn = createAction('islogged')

const initialState = {}

const UserReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(fetchUser,(state, action) => {
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
})

export default UserReducer