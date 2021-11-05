import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground , Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DetailsScreen  } from '../screens/DetailsScreen';

const SiteItemList = ({item,navigation}) =>{

    const navigationn = useNavigation();
   
    const { businessName,img,category} = item;
    const imgSource = "../assets/images/"+img+".jpg"
    // console.log("../assets/images/"+img+".jpg")
    return (
        <TouchableOpacity
            onPress={()=>navigationn.navigate("DetailsScreen")}
        >
            <View style={styles.item}>
                <ImageBackground 
                    source={require("../assets/images/veggie.jpg")}
                    style={styles.image} 
                >
                    <Text style={styles.itemText}>{businessName}</Text>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{category}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
            
        
    )
};

const styles = StyleSheet.create({
    item:{
        flex:1,
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
        width:"35%",
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