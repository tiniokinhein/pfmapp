import React from 'react'
import { 
    ActivityIndicator,
    Image,
    Keyboard,  
    Pressable, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import SafeAreaView from 'react-native-safe-area-view'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import EyeIcon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { themeColors } from '../../config/themeColors'
import { addAuth } from '../../redux/auth/actions'


const loginData = {
    email: 'khaingzinthwal7@gmail.com',
    password: 'user123'
}

const Login = () => {

    const [loading , setLoading] = React.useState(false)
    const [pwStatus , setPwStatus] = React.useState(true)
    const [email , setEmail] = React.useState('')
    const [password , setPassword] = React.useState('')
    const inputEmail = React.useRef()
    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    const submitLogin = async () => {
        setLoading(true)
        Keyboard.dismiss()

        if(email === loginData.email && password === loginData.password) {
            setEmail('')
            setPassword('')
            setLoading(false)
            dispatch(addAuth())
        } else {
            setLoading(false)
            showMessage({
                message: 'အီးမေးလ် နှင့် လျှို့ဝှက်နံပါတ် ကိုက်ညီမှုမရှိပါ',
                description: 'နောက်တစ်ကြိမ် ကြိုးစားကြည့်ပါ',
                type: 'default'
            })
        }
    }

    const form = (
        <View style={tw`flex-1`}>
            <View style={tw`h-[170px]`}>
                <Image
                    source={require('../../assets/png/bg.png')}
                    style={tw`w-full h-full bg-[${themeColors.bg}]`}
                    resizeMode='cover'
                />
            </View>
            <View style={tw`grow bg-[${themeColors.bg}] px-10 py-15`}>
                <View style={tw`mb-7`}>
                    <Text style={tw`text-[${themeColors.hl}] text-[25px] text-center font-bold`}>
                        Sign In
                    </Text>
                </View>
                <View style={tw`mb-7`}>
                    <TextInput
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        placeholder='Email'
                        placeholderTextColor={themeColors.hl}
                        keyboardType='email-address'
                        style={tw`h-[60px] px-5 border border-[${themeColors.df}] bg-[${themeColors.tw}] rounded-[12px] text-[18px] text-black`}
                        returnKeyType='next'
                        onSubmitEditing={(value) => {
                            inputEmail.current.focus()
                            setEmail(value.nativeEvent.text)
                        }}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={tw`mb-10`}>
                    <TextInput
                        ref={inputEmail}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        placeholder='Password'
                        placeholderTextColor={themeColors.hl}
                        style={tw`h-[60px] pl-5 pr-15 border border-[${themeColors.df}] bg-[${themeColors.tw}] rounded-[12px] text-[18px] text-black`}
                        secureTextEntry={pwStatus ? true : false}
                        keyboardAppearance='dark'
                        onSubmitEditing={(value) => {
                            setPassword(value.nativeEvent.text)
                            submitLogin()
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => pwStatus ? setPwStatus(false) : setPwStatus(true)}
                        activeOpacity={0.8}
                        style={tw`absolute right-4 top-1/2 -mt-[11px]`}
                    >
                        <EyeIcon 
                            name={pwStatus ? 'eye-off' : 'eye'}
                            size={20} 
                            color={pwStatus ? themeColors.hl : themeColors.cl}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={tw`items-center justify-center h-[60px] rounded-[12px] bg-[${themeColors.df}]`}
                    onPress={() => submitLogin()}
                    activeOpacity={0.8}
                    disabled={email.includes('@') && password.length >= 6 ? false : true}
                >
                    <Text style={tw`text-[${themeColors.tw}] text-[18px]`}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <View style={tw`mt-5 flex flex-row items-center justify-center`}>
                    <Text style={tw`text-[${themeColors.hl}] text-[16px] text-center font-bold`}>
                        Not have an account?
                    </Text>
                    <Pressable
                        style={tw`ml-2`}
                        onPress={() => {}}
                    >
                        <Text style={tw`text-[${themeColors.df}] text-[16px] text-center font-bold`}>
                            Sign up
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={tw`flex-1`}>
            { 
                isFocused ? (
                    <StatusBar 
                        translucent
                        backgroundColor='transparent'
                        barStyle='light-content'
                    />
                ) : null
            }

            {
                loading && (
                    <View 
                        style={[
                            tw`flex-1 justify-center z-10`,
                            StyleSheet.absoluteFill
                        ]}
                    >
                        <ActivityIndicator color={themeColors.df} size='large' />
                    </View>
                )
            }

            <FlashMessage 
                position='top' 
                duration={3000}
                hideStatusBar={false}
                floating={true}
                style={tw`mt-7 rounded-3xl bg-[${themeColors.tw}] px-5 py-4`}
                titleStyle={tw`text-[16px] text-[${themeColors.df}] leading-[30px]`}
                textStyle={tw`text-[14px] text-[${themeColors.df}] leading-[30px]`}
            />

            {form}
            
        </SafeAreaView>
    )
}

export default Login