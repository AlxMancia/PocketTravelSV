import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Colors from '../res/colors';

import {Icon} from 'react-native-elements';

export default function ProfileScreen({navigation}) {
  const handleAddBusinessPress = () => {
    navigation.navigate('BusinessForm');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAddBusinessPress} style={styles.wrapper}>
        <Icon name="store" type="font-awesome-5" color={Colors.primaryRed} />
        <Text style={styles.txt}>Agregar negocio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingLeft: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    borderTopColor: Colors.lightGray,
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 18,
    marginLeft: 16,
  },
});
