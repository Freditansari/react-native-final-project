import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import NewsListsPanel from './NewsListsPanel'

const CategoryPanel = (props) => {
    

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={{width:'100%'}}>
                <TouchableOpacity style={styles.myButton} onPress={() =>{props.setSelectedCategory("Finance")}}>
                    <Text style={styles.buttonText}>Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.myButton} onPress={() =>{props.setSelectedCategory("Politics")}} >
                    <Text style={styles.buttonText}>Politics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.myButton} onPress={() =>{props.setSelectedCategory("Sports")}}>
                    <Text style={styles.buttonText}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.myButton}>
                    <Text style={styles.buttonText}>Travels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.myButton}>
                    <Text style={styles.buttonText}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.myButton}>
                    <Text style={styles.buttonText}>Automotive</Text>
                </TouchableOpacity>
             
            
            </ScrollView>
           
           
        </View>
    )
}

export default CategoryPanel

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        width: '100%'
    },
    myButton:{
        padding:15,
        borderRadius:20,
        backgroundColor:'#FF002A',
        margin: 3
       
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold'
    }

})
