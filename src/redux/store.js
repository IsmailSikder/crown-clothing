import {applyMiddleware,createStore} from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
const middleware = [logger]
const store = createStore(rootReducer, applyMiddleware(...middleware))
const persistor = persistStore(store)


export  {store,persistor}