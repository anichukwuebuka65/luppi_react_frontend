import { configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/UserReducer'


const reducer = {
   // postFeed: postFeedReducer,
    user: userReducer
}
export const store = configureStore({
    reducer
})

