import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps';
import { useLocation } from '../hook/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { FabResetButton } from './FabResetButton';
import Geolocation from '@react-native-community/geolocation';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export const Map = () => {

    const { hasLocation,
            initialPosition,
            getCurrentLocation,
            followUserLocation,
            userLocation,
            stopFollowingUserPosition } = useLocation();

    const mapViewRef = useRef();
    const following = useRef(true);

    // useEffect(() => {
    //     followUserLocation();
    //     return()=>{
    //         stopFollowingUserPosition();
    //     }
    // }, [])

    useEffect(() => {
        if(!followUserLocation) return;

       const {latitude,longitude} = userLocation;
       mapViewRef.current?.animateCamera({
            center:{
                latitude: latitude,
                longitude:longitude
            }
       })
    }, [userLocation])

    const centerPosition = async () =>{
        const location = await getCurrentLocation();
        following.current = true;
        mapViewRef.current.animateCamera({
            center:{
                latitude: location.latitude,
                longitude:location.longitude
            }
        })
    }

    if(!hasLocation) return <LoadingScreen/>;

    return (
        <>
            <Button
                title='Prueba Location'
                onPress={()=>Geolocation.getCurrentPosition(
                    info => console.log(info.coords),
                    (err)=>console.log(err),
                    {enableHighAccuracy:true}
                    )}
            />
            <MapView
                ref={ (el)=> mapViewRef.current = el }
                style={{flex:1}}
                showsUserLocation={true}
                initialRegion={{
                latitude: initialPosition.latitude,
                longitude: initialPosition.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                onTouchStart={()=>following.current = false}
            >
                <Marker
                    coordinate={{
                        latitude:13.684757,
                        longitude:-89.301191,
                    }}
                    title="Marcador"
                    description="Prueba de marcador"
                />
            </MapView>
            <FabResetButton
                onPress={centerPosition}
            />
        </>
    )
}

