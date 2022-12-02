import React from 'react'
import { 
    Text,
    View 
} from 'react-native'
import tw from 'twrnc'
import IonIcon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import { themeColors } from '../config/themeColors'

const RecentTransactions = () => {

    const data = [
        {
            name: 'Subscriber Pay Merchant',
            title: 'Restaurant',
            icon: 'utensil-spoon',
            tran: '2',
            price: '1400',
            date: '27 Aug 2022, 12:00 pm',
            unit: 'MMK'
        },
        {
            name: 'Customer Buy Goods',
            title: 'Pharmacy',
            icon: 'thermometer-empty',
            tran: '1',
            price: '50000',
            date: '26 Aug 2022, 12:30 pm',
            unit: 'MMK'
        },
        {
            name: 'Subscriber Pay Merchant',
            title: 'Shopping',
            icon: 'shopping-bag',
            tran: '2',
            price: '30000',
            date: '26 Aug 2022, 11:30 am',
            unit: 'MMK'
        }
    ]

    const lists = (
        <LinearGradient
            colors={[
                themeColors.df,
                'rgba(216, 37, 60, 0.55)'
            ]}
            style={tw`mt-3 rounded-2xl px-5 py-2.5`}
            start={{
                x: 0,
                y: 0.5
            }}
            end={{
                x: 1,
                y: 0.5
            }}
        >
            {
                data.map((p,i) => {
                    const ltData = (data.length - 1) === i

                    return(
                        <View 
                            key={i}
                            style={tw`flex-row items-center justify-between pt-2.5 ${ltData ? 'pb-2.5' : 'pb-5 border-b'} border-[${themeColors.tw}]`}
                        >
                            <View>
                                <Text style={tw`text-[16px] text-[${themeColors.tw}] font-bold`}>
                                    {p.name}
                                </Text>
                                <Text style={tw`mt-1 text-[13.5px] text-[${themeColors.tw}]`}>
                                    {p.date}
                                </Text>
                            </View>
                            <View>
                                <Text style={tw`text-[15px] text-[${themeColors.tw}] text-right uppercase font-bold`}>
                                    {p.price} {p.unit}
                                </Text>
                                <View style={tw`mt-1 flex-row items-center justify-end`}>
                                    <View style={tw`mr-2`}>
                                        <IonIcon 
                                            name={p.icon}
                                            size={13}
                                            color={themeColors.tw}
                                        />
                                    </View>
                                    <Text style={tw`text-[10px] text-[${themeColors.tw}]`}>
                                        {p.title}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </LinearGradient>
    )

    return data.length ? (
        <View style={tw`mt-5`}>
            <Text style={tw`text-[16px] text-[#474747] font-bold`}>
                Recent Transactions
            </Text>
            {lists}
        </View>
    ) : null
}

export default RecentTransactions