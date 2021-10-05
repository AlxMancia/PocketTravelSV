import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SiteItemList from '../components/SiteListItem';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Recomendaciones */}
      <View style ={styles.sitiosWrapper}>
        <View styles={styles.items}>  
          {/* Sitios */}
          <SiteItemList text={'sitio1'} />
          <SiteItemList text={'sitio2'} />
          <SiteItemList text={'sitio3'} />
        </View>
      </View>
      
    </ScrollView>
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
