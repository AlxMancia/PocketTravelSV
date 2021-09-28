import React, {useState} from 'react';
import {Image, Pressable, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import SearchBar from '../components/SearchBar';
import Colors from '../res/colors';

export default function HomeScreen({navigation}) {
  const [value, setValue] = useState();
  const updateSearch = value => {
    //do your search logic or anything
    console.log(value);
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
      <Pressable onPress={() => navigation.navigate('Category')}>
        <Text>Ir a CategoryScreen</Text>
      </Pressable>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgCover: {
    height: '60%',
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
});
