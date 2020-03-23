import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeadlinePanel from './HeadlinePanel'
import { ScrollView } from 'react-native-gesture-handler'

import CategoryScreen from './CategoryScreen'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ScrollView >
                <Text>Headline -> Swipe to see more</Text>
                <HeadlinePanel navigation={navigation}/>
                <CategoryScreen navigation={navigation} />
            </ScrollView>
           
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
