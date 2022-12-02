import React from 'react'
import { 
    Text,
    View 
} from 'react-native'
import tw from 'twrnc'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { SelectList } from 'react-native-dropdown-select-list'
import { VictoryPie } from "victory-native"
import { themeColors } from '../config/themeColors'

const TotalExpenses = () => {

    const [selected , setSelected] = React.useState('')

    const monthLists = [
        { key:'This month', value:'This month' },
        { key:'October 2022', value:'October 2022' }
    ]
    
    const lists = (
        <View style={tw`pt-5 pb-2 border-b border-[${themeColors.hl}]`}>
            <View style={tw`w-1/2`}>
                <SelectList 
                    setSelected={setSelected} 
                    data={monthLists} 
                    onSelect={() => {}}
                    placeholder='This month'
                    search={false}
                    boxStyles={{
                        borderColor: themeColors.df,
                        color: themeColors.df,
                        backgroundColor: themeColors.tw
                    }}
                    inputStyles={{
                        color: themeColors.df,
                        fontSize: 10
                    }}
                    dropdownStyles={{
                        borderColor: themeColors.df,
                        backgroundColor: themeColors.tw,
                        position: 'absolute',
                        top: 33,
                        left: 0,
                        right: 0,
                        zIndex: 999
                    }}
                    dropdownItemStyles={{
                        color: themeColors.df
                    }}
                    dropdownTextStyles={{
                        color: themeColors.df,
                        fontSize: 10
                    }}
                    arrowicon={
                        <IonIcon 
                            name='chevron-down'
                            size={14}
                            color={themeColors.df}
                        />
                    }
                />
            </View>

            <View style={tw`relative`}>
                <VictoryPie
                    data={[
                        { y: 30000, x: `Restaurant${'\n \n'}30000`},
                        { y: 30000, x: `Education${'\n \n'}30000`},
                        { y: 80000, x: `Pharmacy${'\n \n'}80000`},
                        { y: 50000, x: `Shopping${'\n \n'}50000`}
                    ]}
                    colorScale={['#FFAA2C','#0090AF','#51FDD4','#474747']}
                    width={320}
                    height={320}
                    innerRadius={80}
                    style={{
                        labels: {
                            fill: themeColors.hl, 
                            fontSize: 8, 
                            fontWeight: '600',
                            padding: 10
                        }
                    }}
                /> 

                <View style={tw`absolute left-1/2 top-1/2 items-center -ml-[50px] -mt-[16px]`}>
                    <Text style={tw`text-[14px] text-[${themeColors.hl}]`}>
                        Total Expenses
                    </Text>
                    <Text style={tw`mt-1 text-[14px] text-[${themeColors.cl}] font-bold`}>
                        196000 MMK
                    </Text>
                </View>
            </View>
        </View>
    )

    return lists
}

export default TotalExpenses