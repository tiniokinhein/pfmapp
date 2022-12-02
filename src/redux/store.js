import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { 
    legacy_createStore as createStore, 
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import authReducer from './auth/reducer'

const config = {
    authPersist: {
        key: 'auth',
        storage: AsyncStorage
    }
}

const rootReducer = combineReducers({
    auth: persistReducer(config.authPersist, authReducer)
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)