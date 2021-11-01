import React,{ createContext, useEffect, useState } from "react"
import { AppState, Platform } from "react-native";
import { check, openSettings, PERMISSIONS, request } from "react-native-permissions";

export const PermissionContext = createContext({}); //TODO que exporta al exterior

export const PermissionsProvider = ({children}) => {

    const [permissions, setPermissions] = useState('unavailable');

    useEffect(() => {
        // let permiso = checkLocationPermission();
        askLocationPermission();
        AppState.addEventListener('change',state =>{
            console.log({state})
            if(state !== 'active') return;
            askLocationPermission();
        })
    }, [])

    const askLocationPermission = async () => {
        let permissionStatus;

        if (Platform.OS === 'android'){
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        if(permissionStatus === 'blocked'){
            openSettings();
        }
        
        setPermissions({
            permissionStatus
        });
    }

    const checkLocationPermission = async() => {
        let permissionStatus;
        if (Platform.OS === 'android'){
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        console.log(permissionStatus);
        // setPermissions({
        //     permissionStatus
        // });
        return permissionStatus;
    }

    return(
        <PermissionContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission,
        }}>
            {children}
        </PermissionContext.Provider>
    )

}
