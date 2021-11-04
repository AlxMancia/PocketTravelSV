import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import SearchBar from '../../components/SearchBar';
import LocationBar from '../../components/LocationBar';

import CategoryList from '../../components/CategoryList';
import BusinessResultsScreen from '../BusinessResultsScreen/BusinessResultsScreen';

export default function SearchScreen({navigation}) {
  const [value, setValue] = useState('');

  const updateSearch = val => {
    //do your search logic or anything
    console.log(val, 'VAL');
    setValue(val);
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
      {value.length === 0 ? (
        <CategoryList navigation={navigation} style={styles.categoryList} />
      ) : (
        <BusinessResultsScreen searchKeyword={value} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 24,
    marginBottom: -16,
  },
  categoryList: {
    marginTop: -24,
  },
});
