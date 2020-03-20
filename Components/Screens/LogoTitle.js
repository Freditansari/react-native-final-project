import React from 'react'
import { View, Image } from 'react-native'

const LogoTitle = () => {
    return (
        <View>
            <Image style={{width: 70, height: 35}} source={require('../../assets/merdeka.png')} />
        </View>
    )
}

export default LogoTitle
