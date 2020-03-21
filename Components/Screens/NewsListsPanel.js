import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VerticalCards from '../Shared/VerticalCards'

const NewsListsPanel = () => {
    return (
        <View>
            <VerticalCards></VerticalCards>
        </View>
    )
}

export default NewsListsPanel

const styles = StyleSheet.create({
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
      }
})
