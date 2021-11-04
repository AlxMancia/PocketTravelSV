import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

import Colors from '../res/colors';

export default function BusinessCard({
  name,
  image,
  description,
  category,
  phone,
}) {
  console.log(name, 'NAME');
  return (
    <Card style={styles.card}>
      <Card.Image style={styles.img} source={image} />
      <Card.Title style={styles.title}>{name}</Card.Title>
      <Text style={styles.categoryTxt}>{category}</Text>
      <Text style={styles.text}>{`${description.substring(0, 88)}...`}</Text>
      <Button buttonStyle={styles.button} title="Ver más" />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
  },
  text: {
    marginBottom: 10,
  },
  categoryTxt: {
    color: Colors.primaryRed,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 8,
    marginBottom: 4,
  },
  button: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: Colors.primaryRed,
  },
  img: {
    padding: 0,
    margin: 0,
  },
});
