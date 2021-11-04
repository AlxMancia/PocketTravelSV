import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import CategoryItem from './CategoryItem';

import businessCategories from '../data/business-categories.json';

export default function CategoryList({navigation}) {
  const [categories, setCategories] = useState(businessCategories);

  const handlePress = () => {
    console.log('categoria en searchscreen se presionó');
  };

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <CategoryItem
          item={item}
          onPress={handlePress}
          navigation={navigation}
        />
      )}
    />
  );
}
