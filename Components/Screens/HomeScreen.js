import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeadlinePanel from './HeadlinePanel'

const HomeScreen = () => {
    return (
        <View style={{flex:1}}>
            <Text>Headline -> Swipe to see more</Text>
            <HeadlinePanel style={{flex:5}}/>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
