import React from 'react'
import { 
    View 
} from 'react-native'
import tw from 'twrnc'
import Layout from '../../components/Layout'
import RecentTransactions from '../../components/RecentTransactions'
import TopSpendingCategories from '../../components/TopSpendingCategories'
import TotalExpenses from '../../components/TotalExpenses'
import TotalWealth from '../../components/TotalWealth'

const Dashboard = () => {
    return (
        <Layout title='Dashboard'>
            <View style={tw`py-5 px-7`}>
                <TotalWealth />
                <TotalExpenses />
                <View style={tw`my-5`}>
                    <TopSpendingCategories />
                    <RecentTransactions />
                </View>
            </View>
        </Layout>
    )
}

export default Dashboard