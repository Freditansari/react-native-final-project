import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VerticalCards from '../Shared/VerticalCards'
import axios from 'axios'

const NewsListsPanel = (props) => {
    const FINANCEURL = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27f4c704b69f4cd78cc1aa82d7f41dbd&pageSize=10';
    const POLITICURL = 'http://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=27f4c704b69f4cd78cc1aa82d7f41dbd&pageSize=10';
    const SPORTSURL = 'http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=27f4c704b69f4cd78cc1aa82d7f41dbd&pageSize=10';

    const [SelectedNews, setSelectedNews] = useState([])

    const fetchFinanceNews = async() =>{
        const result = await axios.get(FINANCEURL);
        setSelectedNews(result.data);
    }

    const fetchPoliticNews = async() =>{
        const result = await axios.get(POLITICURL);
        setSelectedNews(result.data);
    }

    const fetchSportsNews = async() =>{
        const result = await axios.get(SPORTSURL);
        setSelectedNews(result.data)
    }

    useEffect( () =>{
       
        if(props.SelectedCategory === 'Finance'){
            fetchFinanceNews();
        }
        if(props.SelectedCategory ==='Politics'){
            fetchPoliticNews();
        }
        if(props.SelectedCategory ==='Sports'){
            fetchSportsNews();
        }

    },[props.SelectedCategory]);

    return (
        <View>
            {!!
                (SelectedNews.articles)?(
                     SelectedNews.articles.map(article =>{
                         return (
                             <VerticalCards title ={article.title.toString()} imageUrl ={article.urlToImage} />
                         );
                     })   
                ):(
                    <Text>Please wait while we fetch your news</Text>
                )
            }
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
