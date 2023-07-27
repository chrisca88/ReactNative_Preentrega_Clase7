import {configureStore} from '@reduxjs/toolkit'
import shopReducer from '../Features/Shop/ShopSlice'
import counterReducer from '../Features/Counter/counterSlice'

export default configureStore({
    reducer: {
        counterReducer,
        shopReducer
    }
})