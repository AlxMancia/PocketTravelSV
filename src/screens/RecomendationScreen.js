import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import BusinessCard from '../components/BusinessCard';
import SiteItemList from '../components/SiteListItem';
import businessProfiles from '../data/business-profiles.json'

export default function App({navigation}) {

  const [business, setBusiness] = useState(businessProfiles.slice(0, 9));

  return (
    // <ScrollView style={styles.container}>
    //   {/* Recomendaciones */}
    //   <View style ={styles.sitiosWrapper}>
    //     <View styles={styles.items}>  
    //       {/* Sitios */}
    //       <SiteItemList text={'sitio1'} />
    //       <SiteItemList text={'sitio2'} />
    //       <SiteItemList text={'sitio3'} />
    //     </View>
    //   </View>
      
    // </ScrollView>
    <FlatList
        // numColumns={3}
        data={business}
        horizontal={false}
        // renderItem={({item}) => (
        //   <SiteItemList item={item} navigation={navigation} text={'sitio3'} />
        // )}
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
