import React from 'react'
import { 
    Image, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native'
import tw from 'twrnc'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { themeColors } from '../../config/themeColors'
import { removeAuth } from '../../redux/auth/actions'

const Profile = () => {

    const { profile_detail } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const pic = (
        <View style={tw`mb-5`}>
            <Image 
                source={require('../../assets/png/profile.png')}
                style={tw`w-[100px] h-[100px] mx-auto`}
            />
            <View style={tw`mt-4 items-center`}>
                <Text style={tw`text-[16px] text-[${themeColors.cl}] font-bold`}>
                    {profile_detail?.name}
                </Text>
                <Text style={tw`mt-1 text-[15px] text-[${themeColors.hl}] font-bold`}>
                    {profile_detail?.email}
                </Text>
            </View>
        </View>
    )

    const lists = (
        <View>
            <TouchableOpacity 
                onPress={() => {}}
                activeOpacity={0.8}
                style={tw`flex-row items-center justify-between py-5 border-t-[2px] border-[${themeColors.hl}]`}
            >
                <View style={tw`flex-row items-center`}>
                    <IonIcon 
                        name='person-circle'
                        size={24}
                        color={themeColors.hl}
                    />
                    <Text style={tw`ml-5 text-[15px] text-[${themeColors.hl}] font-bold`}>
                        My Account
                    </Text>
                </View>
                <IonIcon 
                    name='chevron-forward'
                    size={22}
                    color={themeColors.hl}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {}}
                activeOpacity={0.8}
                style={tw`flex-row items-center justify-between py-5 border-t-[2px] border-[${themeColors.hl}]`}
            >
                <View style={tw`flex-row items-center`}>
                    <IonIcon 
                        name='wallet'
                        size={24}
                        color={themeColors.hl}
                    />
                    <Text style={tw`ml-5 text-[15px] text-[${themeColors.hl}] font-bold`}>
                        Manage Wallet Account
                    </Text>
                </View>
                <IonIcon 
                    name='chevron-forward'
                    size={22}
                    color={themeColors.hl}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {}}
                activeOpacity={0.8}
                style={tw`flex-row items-center justify-between py-5 border-t-[2px] border-[${themeColors.hl}]`}
            >
                <View style={tw`flex-row items-center`}>
                    <IonIcon 
                        name='help-circle'
                        size={24}
                        color={themeColors.hl}
                    />
                    <Text style={tw`ml-5 text-[15px] text-[${themeColors.hl}] font-bold`}>
                        Help
                    </Text>
                </View>
                <IonIcon 
                    name='chevron-forward'
                    size={22}
                    color={themeColors.hl}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    dispatch(removeAuth())
                }}
                activeOpacity={0.8}
                style={tw`flex-row items-center justify-between py-5 border-t-[2px] border-[${themeColors.hl}]`}
            >
                <View style={tw`flex-row items-center`}>
                    <IonIcon 
                        name='log-out'
                        size={24}
                        color={themeColors.hl}
                    />
                    <Text style={tw`ml-5 text-[15px] text-[${themeColors.hl}] font-bold`}>
                        Log Out
                    </Text>
                </View>
                <IonIcon 
                    name='chevron-forward'
                    size={22}
                    color={themeColors.hl}
                />
            </TouchableOpacity>
        </View>
    )

    return (
        <Layout title='Profile'>
            <View style={tw`py-5 px-7`}>
                {pic}
                {lists}
            </View>
        </Layout>
    )
}

export default Profile