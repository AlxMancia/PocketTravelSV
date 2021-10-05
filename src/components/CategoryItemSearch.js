import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import {Icon} from 'react-native-elements';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Colors from '../res/colors';

const CategoryItemSearch = ({item}) => {
  const {name, categoryIcon, library} = item;

  return (
    <TouchableOpacity style={styles.categoryItem}>
      <Icon
        name={categoryIcon}
        type={library}
        size={32}
        color={Colors.zircon}
      />
      <Text style={styles.categoryTxt}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    borderBottomWidth: 0.6,
    borderBottomColor: Colors.lightGray,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
  },
  categoryTxt: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.zircon,
    marginLeft: 32,
  },
});

export default CategoryItemSearch;
