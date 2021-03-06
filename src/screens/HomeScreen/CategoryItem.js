import React from 'react';

import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {Icon} from 'react-native-elements';

import Colors from '../../res/colors';

const CategoryItem = ({item, navigation}) => {
  const {id, name, categoryIcon, library} = item;

  const handlePress = () => {
    if (id === 0) navigation.navigate('Categories');
    else
      navigation.navigate('Results', {
        category: name,
      });
  };

  return (
    <TouchableOpacity style={styles.categoryIcon} onPress={handlePress}>
      <Icon
        name={categoryIcon}
        type={library}
        size={32}
        color={Colors.primaryRed}
      />
      <Text style={styles.categoryTxt}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryIcon: {
    width: 80,
    height: 80,
    margin: 16,
  },
  categoryTxt: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default CategoryItem;
