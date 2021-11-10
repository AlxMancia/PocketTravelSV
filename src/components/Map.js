import React, {useEffect, useState, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {useLocation} from '../hook/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {FabResetButton} from './FabResetButton';
import Geolocation from '@react-native-community/geolocation';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

export const Map = ({_latitude,_longitude,_name,_address = " "}) => {
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowingUserPosition,
  } = useLocation();

  const mapViewRef = useRef();
  const following = useRef(true);

  // useEffect(() => {
  //     followUserLocation();
  //     return()=>{
  //         stopFollowingUserPosition();
  //     }
  // }, [])

  //Dummy data for routes.
  const [coordinates] = useState([
    {
      latitude: 13.6917741,
      longitude: -89.2900771,
    },
    {
      latitude: 13.7017741,
      longitude: -89.2800771,
    },
  ]);

  //MARKER 1. POSICIONES PARA HACER TRAZADO DE RUTA
  const [endLong, setEndLong] = useState();
  const [endLat, setEndLat] = useState();

  //MARKER 2. POSICIONES PARA HACER TRAZADO DE RUTA
  const [endLong2, setEndLong2] = useState();
  const [endLat2, setEndLat2] = useState();

  useEffect(() => {
    if (!followUserLocation) return;

    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {
        latitude: latitude,
        longitude: longitude,
      },
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const location = await getCurrentLocation();
    following.current = true;
    mapViewRef.current.animateCamera({
      center: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
    });
  };

  if (!hasLocation) return <LoadingScreen />;
  console.log(initialPosition.latitude);
  console.log(initialPosition.longitude);

  return (
    <>
      <Button
        title="Prueba Location"
        onPress={() =>
          Geolocation.getCurrentPosition(
            info => console.log(info.coords),
            err => console.log(err),
            {timeout: 100000, enableHighAccuracy: true},
          )
        }
      />
      <MapView
        ref={el => (mapViewRef.current = el)}
        style={{flex: 1}}
        showsUserLocation={true}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}>
          {
            _latitude && <MapViewDirections
                          origin={
                            {latitude: initialPosition.latitude,
                            longitude: initialPosition.longitude,}
                          }
                          destination={{
                            latitude: _latitude,
                            longitude: _longitude,
                          }}
                          apikey={'AIzaSyDRv1WE_WRGcptxSyPD8o9wPNFLai7wLS0'} // insert your API Key here
                          strokeWidth={4}
                          strokeColor="#111111"
                        />
          }
          {
            _name && <Marker
                      coordinate={{
                        latitude: _latitude,
                        longitude: _longitude,
                      }}
                      draggable={true}
                      onDragStart={e => {
                        console.log('onDrag', e.nativeEvent.coordinate);
                      }}
                      onDragEnd={e => {
                        setEndLat(e.nativeEvent.coordinate.latitude);
                        setEndLong(e.nativeEvent.coordinate.longitude);
                      }}
                      title={_name}
                      description={_address}
                    />
          }
        
      


      </MapView>
      <FabResetButton onPress={centerPosition} />
    </>
  );
};
