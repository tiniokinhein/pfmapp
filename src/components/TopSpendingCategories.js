import React from 'react'
import { 
    Text,
    View 
} from 'react-native'
import tw from 'twrnc'
import IonIcon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import { themeColors } from '../config/themeColors'

const TopSpendingCategories = () => {

    const data = [
        {
            name: 'Pharmacy',
            icon: 'thermometer-empty',
            tran: '2',
            price: '80000',
            budget: '100000',
            unit: 'MMK',
            b_text: 'Budget'
        },
        {
            name: 'Shopping',
            icon: 'shopping-bag',
            tran: '1',
            price: '50000',
            budget: '100000',
            unit: 'MMK',
            b_text: 'Budget'
        },
        {
            name: 'Restaurant',
            icon: 'utensil-spoon',
            tran: '2',
            price: '30000',
            budget: '100000',
            unit: 'MMK',
            b_text: 'Budget'
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
                            <View style={tw`flex-row items-center`}>
                                <View style={tw`mr-2 w-[30px]`}>
                                    <IonIcon 
                                        name={p.icon}
                                        size={26}
                                        color={themeColors.tw}
                                    />
                                </View>
                                <View>
                                    <Text style={tw`text-[16px] text-[${themeColors.tw}] font-bold`}>
                                        {p.name}
                                    </Text>
                                    <Text style={tw`mt-1 text-[13.5px] text-[${themeColors.tw}]`}>
                                        {p.tran} {Number(p.tran) <= 1 ? 'transaction' : 'transactions'}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={tw`text-[15px] text-[${themeColors.tw}] text-right uppercase font-bold`}>
                                    {p.price} {p.unit}
                                </Text>
                                <Text style={tw`mt-1 text-[13.5px] text-[${themeColors.tw}] text-right`}>
                                    {p.b_text} : {p.budget}
                                </Text>
                            </View>
                        </View>
                    )
                })
            }
        </LinearGradient>
    )

    return data.length ? (
        <View>
            <Text style={tw`text-[16px] text-[#474747] font-bold`}>
                Top Spending Categories
            </Text>
            {lists}
        </View>
    ) : null
}

export default TopSpendingCategories