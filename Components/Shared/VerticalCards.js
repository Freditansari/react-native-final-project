import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Cards = (props) => {
    return (
      <View>
        <View style={styles.card} >
     
              <View style={styles.cardContent}>
                <View style ={ styles.leftColumn}>
                  <Text style={styles.cardText}>
                       
                          {props.title}
                    </Text>

                </View>
                <View style={styles.rightColumn}>
                  {
                    (props.imageUrl)?(
                        <Image
                        style={styles.image}
                        source={{uri: props.imageUrl}} />
                    ):(
                      <Image
                      style={styles.image}
                      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}} />
                    )
                  }
                 
                    
                     
                </View>
                
          
        
              </View>
         
         </View>
         </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    card: {
        height: 70,
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
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap'
      },
      cardText:{
        // fontFamily:'HelveticaNeue-UltraLight',
        fontWeight:'normal'
      },
      leftColumn:{
        flex: 3,
        marginHorizontal: 10,
        marginVertical: 15,
       
      },
      rightColumn:{
        flex:1,
      },
      image:{
        marginTop: 7,
        width: '90%', 
        height: '80%',
   
      }

})
