import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import {  } from 'react-native-gesture-handler';
import BusinessCard from '../components/BusinessCard';
import SiteItemList from '../components/SiteListItem';
import businessProfiles from '../data/business-profiles.json'
import { MapScreens } from '../screens/MapScreen';


export default function App({navigation}) {

  const [business, setBusiness] = useState(businessProfiles.slice(0, 9));

  return (
    <FlatList
        data={business}
        horizontal={false}
        renderItem={({item}) => (
          <BusinessCard
            address={item.address}
            key={item.id}
            id={item.id}
            name={item.businessName}
            image={item.image}
            phone={item.phone}
            description={item.description}
            category={item.category}
            latitude = {item.latitude}
            longitude = {item.longitude}
          />
        )}
      />


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  sitiosWrapper:{
    paddingTop: 30,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold'
  },
  
});
