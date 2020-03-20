import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeadlinePanel from './HeadlinePanel'

const HomeScreen = () => {
    return (
        <View>
            <Text>Hello from home screen</Text>
            <HeadlinePanel />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
