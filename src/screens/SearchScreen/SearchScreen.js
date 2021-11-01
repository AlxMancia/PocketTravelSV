import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import SearchBar from '../../components/SearchBar';
import LocationBar from '../../components/LocationBar';

import CategoryList from '../../components/CategoryList';

export default function SearchScreen({navigation}) {
  const [value, setValue] = useState();
  const updateSearch = val => {
    //do your search logic or anything
    console.log(val, 'valor buscado');
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
      <CategoryList navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 24,
    marginBottom: -16,
  },
});
