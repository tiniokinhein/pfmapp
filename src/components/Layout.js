import React from 'react'
import { 
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import tw from 'twrnc'
import IonIcon from 'react-native-vector-icons/Ionicons'
import OctIcon from 'react-native-vector-icons/Octicons'
import { themeColors } from '../config/themeColors'

const Layout = ({ title , children }) => {

    const isFocused = useIsFocused()

    return (
        <SafeAreaView style={tw`flex-1 bg-[${themeColors.tw}]`}>
            { 
                isFocused ? (
                    <StatusBar
                        translucent
                        backgroundColor={themeColors.tw}
                        barStyle='dark-content'
                    />
                ) : null
            }

            <View style={tw`flex-row items-center justify-between pt-10 pb-5 px-7 bg-[${themeColors.tw}] shadow-2xl`}>
                <View style={tw``}>
                    <Text style={tw`text-[${themeColors.cl}] text-[20px] font-bold`}>
                        {title}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {}}
                    activeOpacity={0.5}
                    style={tw`relative`}
                >
                    <IonIcon 
                        name='notifications' 
                        size={28} 
                        color={themeColors.cl} 
                    />

                    <OctIcon 
                        name='dot-fill' 
                        size={18} 
                        color={themeColors.df} 
                        style={tw`absolute right-[3px] -top-[4px] z-10`}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={tw`bg-[${themeColors.bg}]`}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Layout