import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import CategoryItem from './CategoryItem';

import businessCategories from '../data/business-categories.json';

export default function CategoryList({navigation, style}) {
  const [categories, setCategories] = useState(businessCategories);

  const handlePress = () => {
    console.log('categoria en searchscreen se presionó');
  };

  return (
    <FlatList
      data={categories}
      style={style}
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
