import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import CategoryList from '../../components/CategoryList';

export default function CategoriesScreen({navigation}) {
  return <CategoryList navigation={navigation} />;
}
