import React from 'react'
import { StyleSheet, Text, View, Image , Dimensions } from 'react-native'
import { AuthSession } from 'expo'

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;
const Cards = (props) => {



    return (
      <View styles={styles.cardContainer}>
        <View style={styles.card} >
          
          
            <View style={styles.cardContent}>
              <Image
                    style={{width: imageWidth*.7, height: imageHeight*.7}}
                    source={{uri: props.image}} />
                <Text style={styles.cardText}>
                     { props.children }
                </Text>
           
            </View>
         </View>
      </View>
    )
}

export default Cards

const styles = StyleSheet.create({
  cardContainer:{
    
  },
    card: {
        height: imageHeight*1.15,
        width: imageWidth*0.8,
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
        marginLeft: 20,
        marginHorizontal: 18,
        marginVertical: 20,
       
      },
      cardText:{
        width:"99.99%",
        marginTop: 15,
        fontFamily:'HelveticaNeue-UltraLight',
        fontWeight:'normal'
      }

})
