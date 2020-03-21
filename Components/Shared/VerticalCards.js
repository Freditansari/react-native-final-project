import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Cards = (props) => {
    return (
        <View style={styles.card} >
           <Image
          style={{width: '25%', height: 50 , marginTop: 7, marginLeft: 8}}
          source={{uri: 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg'}} />
          
            <View style={styles.cardContent}>
                <Text style={styles.cardText}>
                     {/* { props.children } */}
                      lorem ipsum
                </Text>
           
            </View>
         </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    card: {
        height: 70,
      
        flexDirection:'row',
        borderRadius: 6,
        elevation: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    
      },
      cardContent: {
        // flex:1
        width:'80%',
        marginHorizontal: 18,
        marginVertical: 20,
       
      },
      cardText:{
        fontFamily:'HelveticaNeue-UltraLight',
        fontWeight:'normal'
      }

})
