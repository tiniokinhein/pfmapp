import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcon from 'react-native-vector-icons/Ionicons'
import tw from 'twrnc'
import Dashboard from '../screens/default/Dashboard'
import Transaction from '../screens/default/Transaction'
import Budget from '../screens/default/Budget'
import Profile from '../screens/default/Profile'
import AddDoc from '../screens/default/AddDoc'
import { themeColors } from '../config/themeColors'

const Stack = createBottomTabNavigator()

const TabRoutes = () => {

    return (
        <Stack.Navigator
            initialRouteName='Dashboard'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName
        
                    if (route.name === 'Dashboard') {
                        iconName = 'home'
                    } else if (route.name === 'Transaction') {
                        iconName = 'document-text'
                    } else if (route.name === 'Budget') {
                        iconName = 'pie-chart'
                    } else if (route.name === 'Profile') {
                        iconName = 'person-circle'
                    }
        
                    return <IonIcon name={iconName} size={26} color={color}/>
                },
                tabBarActiveTintColor: themeColors.df,
                tabBarInactiveTintColor: themeColors.hl,
                headerShown: false,
                headerShadowVisible: false,
                tabBarStyle: {
                    height: 72,
                    backgroundColor: '#f6f6f6'
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: '600',
                    marginBottom: 13,
                    marginTop: -6
                }
            })}
        >
            <Stack.Screen 
                name='Dashboard' 
                component={Dashboard}
            />
            <Stack.Screen 
                name='Transaction' 
                component={Transaction}
            />
            <Stack.Screen 
                name='Add' 
                component={AddDoc}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <View style={tw`absolute left-1/2 -top-[30px] -ml-[30px] border-[4px] border-[${themeColors.tw}] bg-[${themeColors.df}] w-[58px] h-[58px] items-center justify-center rounded-full shadow`}>
                            <IonIcon 
                                name='add' 
                                size={30} 
                                color={themeColors.tw}
                            />
                        </View>
                    )
                }}
            />
            <Stack.Screen 
                name='Budget' 
                component={Budget}
            />
            <Stack.Screen 
                name='Profile' 
                component={Profile}
            />
        </Stack.Navigator>
    )
}

export default TabRoutes