import React from 'react'
import { 
    Text,
    View 
} from 'react-native'
import tw from 'twrnc'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { themeColors } from '../config/themeColors'

const TotalWealth = () => {

    const lists = (
        <View style={tw`pb-5 border-b border-[${themeColors.hl}]`}>
            <View style={tw`mb-5 flex-row flex-wrap`}>
                <View style={tw`w-1/2`}>
                    <View style={tw`mr-2.5 bg-[${themeColors.df}] rounded-2xl p-5`}>
                        <IonIcon 
                            name='server'
                            size={32}
                            color={themeColors.tw}
                        />
                        <Text style={tw`mt-1 text-[14px] text-[${themeColors.tw}] font-bold`}>
                            Cash Balance
                        </Text>
                        <View style={tw`mt-5`}>
                            <Text style={tw`text-[16px] text-[${themeColors.tw}] font-bold`}>
                                500000
                            </Text>
                            <Text style={tw`mt-1 text-[15px] text-[${themeColors.tw}] font-bold uppercase`}>
                                mmk
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={tw`w-1/2`}>
                    <View style={tw`ml-2.5 bg-[${themeColors.df}] rounded-2xl p-5`}>
                        <IonIcon 
                            name='wallet'
                            size={32}
                            color={themeColors.tw}
                        />
                        <Text style={tw`mt-1 text-[14px] text-[${themeColors.tw}] font-bold`}>
                            AYA Pay Balance
                        </Text>
                        <View style={tw`mt-5`}>
                            <Text style={tw`text-[16px] text-[${themeColors.tw}] font-bold`}>
                                800000
                            </Text>
                            <Text style={tw`mt-1 text-[15px] text-[${themeColors.tw}] font-bold uppercase`}>
                                mmk
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={tw`bg-[${themeColors.df}]/90 rounded-2xl overflow-hidden`}>
                <View style={tw`h-[26px] bg-[${themeColors.df}]`} />
                <View style={tw`px-5 pb-5 pt-2 flex-row items-center justify-between`}>
                    <Text style={tw`mt-1 text-[15px] text-[${themeColors.tw}] font-bold`}>
                        Total Wealth
                    </Text>
                    <Text style={tw`mt-1 text-[15px] text-[${themeColors.tw}] font-bold uppercase`}>
                        {500000 + 800000} mmk
                    </Text>
                </View>
            </View>
        </View>
    )

    return lists
}

export default TotalWealth