import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground , Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SiteItemList = (props) =>{
    const image = { uri: "https://reactjs.org/logo-og.png" };
    const urlImage = props.text
    
    require('../assets/images/sitio1.jpeg')
    
    return (
            <View style={styles.item}>
                <ImageBackground 
                    source={
                        (props.text == 'sitio1') ? require('../assets/images/sitio1.jpeg') : 
                        (props.text == 'sitio2') ? require('../assets/images/sitio2.jpeg') : 
                        (props.text == 'sitio3') ? require('../assets/images/sitio3.jpeg') : require('../assets/images/young-traveler.jpg')
                    } 
                    style={styles.image} 
                >
                    <Text style={styles.itemText}>{props.text}</Text>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>4/5</Text>
                    </View>
                </ImageBackground>
            </View>
        
    )
};

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        paddingHorizontal:15,
        borderRadius: 10,
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between",
        margin:15,
        height:180

    },
    image:{
        flex: 1,
        height:150,
        resizeMode:"cover",
        justifyContent: 'center',
        justifyContent:"space-between",
        alignItems:"center"

    },
    itemText:{
        paddingTop: 5,
        color:"#fff",
        maxWidth:'80%',
        marginBottom:5,
    },
    rating:{
        color:"#fff",
        alignContent:"center",
        alignItems:"center",
        width:"15%",
        height:24,
        borderColor: '#eeda',
        borderWidth:2,
        borderRadius:5,
        marginBottom:5
    },
    ratingText:{
        color:"#fff",
    }
});

export default SiteItemList;