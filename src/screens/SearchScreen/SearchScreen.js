import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import SearchBar from '../../components/SearchBar';
import LocationBar from '../../components/LocationBar';
import CategoryItem from './CategoryItem';

import businessCategories from '../../data/business-categories.json';

export default function SearchScreen({navigation}) {
  const [value, setValue] = useState();

  const categories = businessCategories.filter(cat => cat.name !== 'Más');

  const updateSearch = val => {
    //do your search logic or anything
    console.log(val, 'valor buscado');
  };

  const handlePress = () => {
    console.log('categoria en searchscreen se presionó');
  };

  return (
    <>
      <SearchBar
        value={value}
        updateSearch={updateSearch}
        focus={true}
        style={styles.searchBar}
      />
      <LocationBar />
      <FlatList
        style={styles.categoriesList}
        data={categories}
        renderItem={({item}) => (
          <CategoryItem item={item} onPress={handlePress} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 24,
    marginBottom: -16,
  },
});
