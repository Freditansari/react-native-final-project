import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CategoryPanel from './CategoryPanel'
import NewsListsPanel from './NewsListsPanel'

const CategoryScreen = ({navigation}) => {
    let [SelectedCategory, setSelectedCategory] = useState("Finance")

    useEffect(() =>{
    },[SelectedCategory])

    return (
        <View>
             <CategoryPanel setSelectedCategory ={setSelectedCategory}/>
             <NewsListsPanel navigation={navigation} SelectedCategory={SelectedCategory}/>
        </View>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({})
