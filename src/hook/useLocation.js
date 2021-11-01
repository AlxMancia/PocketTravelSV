import Geolocation from '@react-native-community/geolocation';
import { useEffect, useRef, useState } from 'react';

export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState({latitude:"",longitude:""});

    const [userLocation, setUserLocation] = useState({latitude:"",longitude:""});

    const watchID = useRef();
    const isRunning = useRef(true);

    useEffect(()=>{
        isRunning.current = true;
        return () => {
            isRunning.current = false;
        }
    },[])

    useEffect(() => {
        getCurrentLocation()
        .then(location => {
            // console.log(location);

            if(!isRunning.current) return;

            setInitialPosition({
                latitude : location.latitude,
                longitude : location.longitude
            });
            setUserLocation({
                latitude : location.latitude,
                longitude : location.longitude
            });
            setHasLocation(true);
        })
    }, [])

    const getCurrentLocation = () =>{
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                (info) => {
                    resolve({
                        latitude : info.coords.latitude,
                        longitude : info.coords.longitude
                    });
    
                },
                (err)=>reject({err}), {enableHighAccuracy: true}
            );
        });
    }

    const followUserLocation = () =>{
        watchID.current = Geolocation.watchPosition(
            (info) => {
                if(!isRunning.current) return;

                console.log(info.coords)
                setUserLocation({
                    latitude : info.coords.latitude,
                    longitude : info.coords.longitude
                })
            },
            (err)=>console.log({err}), {timeout:3000 ,enableHighAccuracy: true, distanceFilter:10 }
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
