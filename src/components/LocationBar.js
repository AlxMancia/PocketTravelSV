import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {Icon} from 'react-native-elements';

import Colors from '../res/colors';

const LocationBar = () => {
  const handlePress = () => {
    console.log('locationBar Pressed');
  };
  return (
    <View style={[styles.container]} onPress={handlePress}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Icon
            name={'location-outline'}
            type={'ionicon'}
            size={26}
            color={Colors.primaryRed}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Ubicación actual</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: Colors.primaryRed,
    fontSize: 16,
    fontWeight: 'bold',
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 40,
    // backgroundColor: 'red'
  },
  searchContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    flexDirection: 'row',
  },
  container: {
    height: 80,
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // height: '100%', width: '100%'
  },
});

export default LocationBar;
