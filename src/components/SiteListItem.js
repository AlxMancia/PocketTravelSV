import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground,ScrollView  , Image} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { DetailsScreen  } from '../screens/DetailsScreen';
import {Popup} from '../screens/Popup'


const SiteItemList = ({item,navigation}) =>{

    const { businessName,img,category,address,phone,email,website,description} = item;


    const popuplist = [
        { 
        id: 1,
        name: "Categoria: "+category
        },
        { 
        id: 2,
        name: 'Direccion: '+address
        },
        { 
        id: 3,
        name: 'Teléfono: '+phone
        },
        {id: 4,
        name: 'Email: '+email
        },
        {id: 5,
        name: 'Description: '+description
        }
    ]

    let popupRef= React.createRef()

    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }

    const navigationn = useNavigation();
   
    const imgSource = "../assets/images/"+img+".jpg"
    // console.log("../assets/images/"+img+".jpg")
    return (
        <>
        <TouchableOpacity
            onPress={onShowPopup}
        // onPress={()=>navigationn.navigate("DetailsScreen",item)}
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
        <ScrollView>
            <Popup
                title={businessName}
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
                data={popuplist}
            />
        </ScrollView>
        
        </>    
        
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
    },
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
    txtSize: {
      fontSize: 20
    }
});

export default SiteItemList;