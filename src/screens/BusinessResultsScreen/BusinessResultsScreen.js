import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

import BusinessCard from '../../components/BusinessCard';

import businessProfiles from '../../data/business-profiles.json';

export default function BusinessResultsScreen({route, searchKeyword}) {
  const category = route?.params.category;

  console.log(businessProfiles[0].id, 'AIUDA');

  if (
    category &&
    businessProfiles.filter(business => business.category === category)
      .length === 0
  ) {
    return (
      <View style={styles.messageBox}>
        <Text style={styles.messageTxt}>
          Todavía no hay negocios en esta categoría 😢
        </Text>
      </View>
    );
  }

  if (searchKeyword) {
    return (
      <FlatList
        style={styles.categoryList}
        data={businessProfiles.filter(bussiness =>
          bussiness.businessName.includes(searchKeyword),
        )}
        renderItem={({item}) => (
          <BusinessCard
            key={item.id}
            id={item.id}
            name={item.businessName}
            phone={item.phone}
            description={item.description}
            category={item.category}
          />
        )}
      />
    );
  }

  return (
    <FlatList
      style={styles.categoryList}
      data={businessProfiles.filter(
        bussiness => bussiness.category === category,
      )}
      renderItem={({item}) => (
        <BusinessCard
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
  categoryList: {
    marginBottom: 16,
  },
  messageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageTxt: {
    textAlign: 'center',
  },
});
