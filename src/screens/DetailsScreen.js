import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Card, ListItem, Button, Icon, Image} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps';
import { Map } from '../components/Map';
import Images from '../data/fetch-images';

export const DetailsScreen = (props) => {
    const navigation = useNavigation();

    const {address,businessName,category,description,email,phone,latitude,longitude,website,id} = props.route.params.item;
    

    const img = Images.filter(imagen => imagen.businessID === id)[0]
    ? Images.filter(imagen => imagen.businessID === id)[0].img
    : '';

    return (
        <>
            <ScrollView >
                <Card.Image style={{height:140}} source={img} />
                <View>
                    <Text style={styles.title}>{businessName}</Text>
                    <Text style={styles.category}>{category}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>Informacion</Text>
                    <Text style={styles.header}>Direccion: <Text style={styles.info}>{address}</Text></Text>
                    <Text style={styles.header}>Telefono: <Text style={{color:"blue",fontSize:18,fontWeight:'500'}}>{phone}</Text></Text>
                    <Text style={styles.header}>Email: <Text style={styles.info}>{email}</Text></Text>
                    <Text style={styles.header}>Web: <Text style={styles.info}>{website}</Text></Text>
                    <Text style={styles.header}>Descripcion: <Text style={styles.info}>{description}</Text></Text>
                </View>
                <View style={styles.mapContainer}>
                    <Text style={styles.header}>Ubicacion: </Text>
                    <MapView style={{height:200}}
                            // showsUserLocation={true}
                            initialRegion={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.0122,
                            longitudeDelta: 0.0121,
                            }}>
                        <Marker
                            coordinate={{
                                latitude,
                                longitude,
                            }}
                            title={businessName}
                            description={address}
                        />
                    </MapView>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={()=>navigation.navigate("MapScreen",{latitude,longitude,businessName,address})}
                        style={styles.buttonDir}
                    >
                        <Icon name="arrow-circle-right" type="font-awesome" color="white" />
                    </TouchableOpacity>
                </View>
        </ScrollView>
        </>
        
    )
}

const styles = StyleSheet.create({
   title:{
       paddingTop:15,
       fontSize:32,
       alignSelf:'center'
   },
   category:{
        // paddingTop:15,
        fontSize:16,
        alignSelf:'center',
        color:'red'
   },
   infoContainer:{
       paddingTop:10,
       paddingLeft:15,
   },
   header:{
       fontSize:20,
       fontWeight:'bold'
   },
   info:{
       fontSize:18,
       fontWeight:'300'
   },
   mapContainer:{
    paddingTop:10,
    paddingLeft:15,
   },
   buttonDir:{
    position:'absolute',
    bottom:5,
    right:5,
    width:45,
    height:45,
    borderRadius:100,
    backgroundColor:"#4287f5",
    justifyContent:'center',
    alignSelf:'center'
  }
});
  