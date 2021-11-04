import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Map} from '../components/Map';
import {PermissionContext} from '../context/PermisionContext';

export const MapScreens = () => {
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  // useEffect(() => {
  //     askLocationPermission();
  // }, [])

  return (
    <View style={styles.container}>
      {/* <Text>Maps</Text>
            <View style={{backgroundColor:"black"}}>
                <Button
                    title="Permiso"
                    onPress={askLocationPermission}
                />
            </View>
            <Text>{JSON.stringify(permissions,null,5)}</Text> */}
      <Map />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
});
