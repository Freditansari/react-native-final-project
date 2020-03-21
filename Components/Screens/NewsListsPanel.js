import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VerticalCards from '../Shared/VerticalCards'

const NewsListsPanel = (props) => {
    const FINANCEURL = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27f4c704b69f4cd78cc1aa82d7f41dbd&pageSize=10';
    const POLITICURL = 'http://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=27f4c704b69f4cd78cc1aa82d7f41dbd&pageSize=10';
    const SPORTSURL = 'http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=27f4c704b69f4cd78cc1aa82d7f41dbd&pageSize=10';

    const [SelectedNews, setSelectedNews] = useState([])
    useEffect( () =>{
        //todo call axios here. 
        if(props.SelectedCategory === 'Finance'){

        }
    },[props.SelectedCategory]);

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
