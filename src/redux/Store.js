import { configureStore} from '@reduxjs/toolkit'
import { postReducer } from './reducers/PostSlice'
import UserReducer from './reducers/UserReducer'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        user: UserReducer
    }
})
