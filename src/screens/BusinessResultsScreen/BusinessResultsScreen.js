import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

import BusinessCard from '../../components/BusinessCard';

import businessProfiles from '../../data/business-profiles.json';

import FoodImg1 from '../../assets/images/food1.jpg';
import FoodImg2 from '../../assets/images/food2.jpg';
import PubImg from '../../assets/images/pub.jpg';

export default function BusinessResultsScreen({route}) {
  const {category} = route.params;
  const businessList = [
    {
      businessName: 'La papa frita',
      image: FoodImg1,
      categoryID: 1,
      description:
        'En este maravilloso lugar se sirve la mejor papa frita del mundo. Es una experiencia que te marcará para siempre y cambiará tu forma de ver las cosas, no puedes perdertelo, no te arrepentiras. Tu paladar no volvera a ser el mismo',
      phone: '7373-6262',
    },
    {
      businessName: 'Fit & Happy',
      image: FoodImg2,
      categoryID: 1,
      description:
        '¿Quieres comer saludable pero sin llorar? No busques más, nuestra comida esta hecha de la manera más saludable posible pero tenemos nuestras propias recetas que permiten que aún así la comida siga teniendo un sabor inigualable.',
      phone: '7373-6262',
    },
    {
      businessName: 'Honey Night',
      image: PubImg,
      categoryID: 5,
      description: 'Un nuevo concepto, una nueva experiencia, vivelo.',
      phone: '7373-6262',
    },
  ];

  if (
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

  return (
    <FlatList
      style={styles.categoryList}
      data={businessProfiles.filter(
        bussiness => bussiness.category === category,
      )}
      renderItem={({item}) => (
        <BusinessCard
          name={item.businessName}
          image={item.image}
          phone={item.phone}
          description={item.description}
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
