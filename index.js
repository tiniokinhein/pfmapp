import React from 'react'
import { AppRegistry, LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './src/App'
import { name as appName } from './app.json'
import { store , persistor } from './src/redux/store'

const RNRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

LogBox.ignoreLogs([
    "Require cycle: node_modules/victory"
])

AppRegistry.registerComponent(appName, () => RNRedux)