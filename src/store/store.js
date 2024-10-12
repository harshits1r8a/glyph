import { configureStore } from "@reduxjs/toolkit";

import authSlice from './reducers/authSlice.js'
import postSlice from './reducers/postSlice'

const store = configureStore({
    reducer : {
        auth : authSlice,
        post : postSlice
    }
})

export default store