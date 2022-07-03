import { configureStore} from '@reduxjs/toolkit'
import postFeedReducer from './reducers/PostFeedReducer'

export const store = configureStore({
    reducer: {
        postFeed: postFeedReducer
    },
})

