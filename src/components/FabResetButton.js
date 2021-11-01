import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';


export const FabResetButton = ({onPress}) => {
    return (
        <View style={style.container}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={style.blackButton}
            >
                <Icon name="search" type="font-awesome" color="white" />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:10,
        right:10,
        justifyContent:'center',
        alignItems:'center'
    },
    blackButton:{
        zIndex:9999,
        height:50,
        width:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    }
})
