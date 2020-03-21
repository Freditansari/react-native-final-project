import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NewsDetails = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('cloudTV')}>
                <Text>hello from news details</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default NewsDetails

const styles = StyleSheet.create({})
