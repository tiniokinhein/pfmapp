import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Login from '../screens/auth/Login'
import TabRoutes from './TabRoutes'

const Stack = createNativeStackNavigator()

const DefaultRoutes = ({ isSplashVisible , children }) => {

    const { isLogin } = useSelector(state => state.auth)

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    headerShadowVisible: false
                }}
            >
                {
                    isLogin ? (
                        <Stack.Screen
                            name='Home'
                            component={TabRoutes}
                        />
                    ) : (
                        <Stack.Screen 
                            name='Login' 
                            component={Login} 
                        />
                    )
                }
            </Stack.Navigator>

            {isSplashVisible && children}
        </NavigationContainer>
    )
}

export default DefaultRoutes