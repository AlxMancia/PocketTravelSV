import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Map} from '../components/Map';
import {PermissionContext} from '../context/PermisionContext';

export const MapScreens = (props=1) => {
  const {permissions, askLocationPermission} = useContext(PermissionContext);
  console.log()
  if(props.route.params != undefined){
    const name = props.route.params.name
    const latitude = props.route.params.latitude;
    const longitude = props.route.params.longitude;
    const address = props.route.params.address

    return (
      <View style={styles.container}>
        <Map _latitude={latitude} _longitude={longitude} _name={name} _address={address}/>  
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
        <Map/>
      </View>
  );
  }

  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
