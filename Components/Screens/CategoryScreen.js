import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CategoryPanel from './CategoryPanel'
import NewsListsPanel from './NewsListsPanel'

const CategoryScreen = () => {
    const [SelectedCategory, setSelectedCategory] = useState('Finance')
    return (
        <View>
             <CategoryPanel />
             <NewsListsPanel />
        </View>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({})
