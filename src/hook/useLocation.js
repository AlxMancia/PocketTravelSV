import Geolocation from '@react-native-community/geolocation';
import { useEffect, useRef, useState } from 'react';

export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState({latitude:"",longitude:""});

    const [userLocation, setUserLocation] = useState({latitude:"",longitude:""});

    const watchID = useRef();
    

    useEffect(() => {
        getCurrentLocation()
        .then(location => {
            setInitialPosition({
                latitude : location.latitude,
                longitude : location.longitude
            });
            setUserLocation({
                latitude : location.latitude,
                longitude : location.longitude
            });
            setHasLocation(true);
        }),(err)=>console.log({err}), {enableHighAccuracy: true}
    }, [])

    const getCurrentLocation = () =>{
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                (info) => {
                    // console.log(info.coords)
                    resolve({
                        latitude : info.coords.latitude,
                        longitude : info.coords.longitude
                    });
    
                },
                (reject)=>console.log({reject}), {enableHighAccuracy: true}
            );
        });
    }

    const followUserLocation = () =>{
        watchID.current = Geolocation.watchPosition(
            (info) => {

                console.log(info.coords)
                setUserLocation({
                    latitude : info.coords.latitude,
                    longitude : info.coords.longitude
                })
            },
            (err)=>console.log({err}), { enableHighAccuracy: true, distanceFilter:10 }
        );
    }

    const stopFollowingUserPosition = () =>{
        if(watchID.current){
            Geolocation.clearWatch(watchID.current)
        }
    }

    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowingUserPosition
    }
       
}
