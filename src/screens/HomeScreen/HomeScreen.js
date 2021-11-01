import React, {useState, useEffect} from 'react';
import {Image, Text, StyleSheet, FlatList, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryItem from './CategoryItem';

import SearchBar from '../../components/SearchBar';
import Colors from '../../res/colors';

import businessCategories from '../../data/business-categories.json';

import {Icon} from 'react-native-elements';

export default function HomeScreen({navigation}) {
  const [value, setValue] = useState();

  /*businessCategories.push({
    name: 'Más',
    categoryIcon: 'ellipsis-horizontal-circle-outline',
    library: 'ionicon',
  });*/

  const [categories, setCategories] = useState(businessCategories.slice(0, 5));

  const updateSearch = val => {
    //do your search logic or anything
    console.log(val);
  };

  const handleSearchBarPress = () => {
    console.log('Searchbar pressed');
    navigation.navigate('Search');
  };

  const handleCatItemPress = () => {
    console.log('se presionó');
  };

  useEffect(() => {
    if (categories.find(cat => cat.id === 0) === undefined) {
      setCategories([
        ...categories,
        {
          id: 0,
          name: 'Más',
          categoryIcon: 'ellipsis-horizontal-circle-outline',
          library: 'ionicon',
        },
      ]);
    }
  }, [categories]);

  return (
    <SafeAreaView>
      <Image
        style={styles.imgCover}
        source={require('../../assets/images/cover-image.jpg')}
      />
      <Text style={styles.txtCover}>Decide tu destino</Text>
      <SearchBar
        value={value}
        updateSearch={updateSearch}
        style={styles.searchBar}
        onPress={handleSearchBarPress}
      />
      <FlatList
        style={styles.categoriesList}
        numColumns={3}
        data={categories}
        renderItem={({item}) => (
          <CategoryItem item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgCover: {
    height: '40%',
    width: '100%',
    resizeMode: 'cover',
    position: 'relative',
  },
  searchBar: {
    marginTop: '-4%',
  },
  txtCover: {
    position: 'absolute',
    top: 32,
    left: 16,
    fontSize: 40,
    maxWidth: '50%',
    height: '100%',
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: Colors.zircon,
  },
  categoriesList: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
