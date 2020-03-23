import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

const NewsDetails = ({navigation, route}) => {

    // console.log(route.params);
    const {title} = route.params;
    const {author} = route.params;
    const {description} = route.params;
    const {urlToImage} = route.params;
    const {content} = route.params;

    return (
        <View>
            
                <Text style={styles.headline}>{title.substring(0,100)}</Text>
                <Text style={styles.authorName}>{author}</Text>
                <Image
                    style={styles.image}
                    source={{uri: urlToImage}} />
                <Text style={styles.content}>{content}</Text>
    
            
        </View>
    )
}

export default NewsDetails

const styles = StyleSheet.create({
    headline: {
        textDecorationLine:'underline',
        fontWeight: 'bold',
        fontSize: 32,     
    },
    authorName:{
        marginVertical: 10,
        fontSize:12
    },
    image: {
        width: imageWidth,
        height: imageHeight
    },
    content:{
        marginVertical: 10,
        fontSize: 16

    }
})
