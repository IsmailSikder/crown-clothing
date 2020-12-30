
import {combineReducers} from 'redux'
import CartReducer from './cart/cart.reducer'
import userReducer from './user/user-reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer'
import collectionReducer from './collections/collections.reducer'

const rootReducer = combineReducers ({
    user: userReducer,
    cart: CartReducer,
    directory:directoryReducer,
    collections: collectionReducer
}
)

//possible configuration
const persistConfig ={
    key:'root',
    storage:storage,
    whilelist:['cart']
}



export default persistReducer(persistConfig,rootReducer)