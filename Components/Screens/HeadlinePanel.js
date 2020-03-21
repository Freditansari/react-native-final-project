import React ,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList , Image } from 'react-native';
import axios from 'axios';
import { setProvidesAudioData } from 'expo/build/AR';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import {Card} from 'react-native-elements';
import Card from '../Shared/Cards'


const HeadlinePanel = ({navigation}) => {
 
    const [HeadlineNews, setHeadlineNews] = useState([]);
    const fetchData =async() =>{
        const result = await axios
        .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=27f4c704b69f4cd78cc1aa82d7f41dbd&pageSize=20');

        setHeadlineNews(result.data);
       

    }

    useEffect(() => {
        fetchData();
    },[])

 

    return (
        <View >
           
           <ScrollView horizontal>
           {
                (HeadlineNews.articles)?(

                    HeadlineNews.articles.map( article =>{
                        let truncatedArticle = article.title.toString();
                        truncatedArticle= truncatedArticle.substring(0,110)
                        return (
                            <View key ={article.publishedAt}>
                                <TouchableOpacity navigation = {navigation} onPress={() => navigation.navigate('News')}>
                            
                                    <Card children={truncatedArticle} image={article.urlToImage} />
                                
                                </TouchableOpacity>
                            </View>
                    

                    )})
                
                
                ):(
                    <Text>Please wait while we render</Text>
                )



           }
           </ScrollView>

                  
               
             
        </View>
    )
}

export default HeadlinePanel

const styles = StyleSheet.create({})
