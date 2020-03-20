import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AuthSession } from 'expo'

const Cards = (props) => {
    return (
        <View style={styles.card}>
           <Image
          style={{width: '100%', height: '80%'}}
          source={{uri: props.image}} />
          
            <View style={styles.cardContent}>
                <Text style={styles.cardText}>
                     { props.children }
                </Text>
           
            </View>
         </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
      },
      cardContent: {
        width:'99%',
        marginHorizontal: 18,
        marginVertical: 20,
       
      },
      cardText:{
        fontFamily:'HelveticaNeue-UltraLight',
        fontWeight:'normal'
      }

})
