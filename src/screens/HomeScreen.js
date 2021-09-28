import React, {useState} from 'react';
import {Image, Text, StyleSheet, FlatList, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryItem from '../components/CategoryItem';

import SearchBar from '../components/SearchBar';
import Colors from '../res/colors';

import {Icon} from 'react-native-elements';

export default function HomeScreen({navigation}) {
  const [value, setValue] = useState();
  const [categories, setCategories] = useState([
    {
      name: 'Restaurantes',
      categoryIcon: 'restaurant-outline',
      library: 'ionicon',
    },
    {name: 'Spa', categoryIcon: 'spa', library: 'font-awesome-5'},
    {name: 'Playas', categoryIcon: 'umbrella-beach', library: 'font-awesome-5'},
    {name: 'Hoteles', categoryIcon: 'bed-outline', library: 'ionicon'},
    {name: 'Bar', categoryIcon: 'glass-martini', library: 'font-awesome-5'},
    {
      name: 'Más',
      categoryIcon: 'ellipsis-horizontal-circle-outline',
      library: 'ionicon',
    },
    'Más',
  ]);
  const updateSearch = value => {
    //do your search logic or anything
    console.log(value);
  };

  const handlePress = item => {
    console.log('Se presiono', item);
  };

  return (
    <SafeAreaView>
      <Image
        style={styles.imgCover}
        source={require('../assets/images/cover-image.jpg')}
      />
      <Text style={styles.txtCover}>Decide tu destino</Text>
      <SearchBar
        value={value}
        updateSearch={updateSearch}
        style={styles.searchBar}
      />
      <FlatList
        style={styles.categoriesList}
        numColumns={3}
        data={categories}
        renderItem={({item}) => (
          <CategoryItem item={item} onPress={handlePress} />
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
