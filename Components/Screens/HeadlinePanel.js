import React ,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import { setProvidesAudioData } from 'expo/build/AR';
import { ScrollView } from 'react-native-gesture-handler';

const HeadlinePanel = () => {
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
        <View>
           <ScrollView>
           {
                 (HeadlineNews.articles)?(
                        // <Text>{HeadlineNews.articles[3].title.toString()}</Text>
                        

                        HeadlineNews.articles.map( article =>(
                            <Text>{article.title}</Text>
                        ))
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
