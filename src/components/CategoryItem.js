import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import {Icon} from 'react-native-elements';

import Colors from '../res/colors';

const CategoryItem = ({item}) => {
  const {name, categoryIcon, library} = item;

  return (
    <View style={styles.categoryIcon}>
      <Icon
        name={categoryIcon}
        type={library}
        size={32}
        color={Colors.primaryRed}
      />
      <Text style={styles.categoryTxt}>{name}</Text>
    </View>
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
