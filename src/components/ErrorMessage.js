import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../res/colors';

const ErrorMessage = ({errors, name}) => {
  //console.log(errors, 'AAAHH');

  if (errors && errors[name]) {
    console.log(errors, 'KEANU');
    console.log(errors[name], 'KHE');
    return <Text style={styles.errorTxt}>{errors[name].message}</Text>;
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  errorTxt: {
    fontSize: 10,
    color: Colors.primaryRed,
  },
});

export default ErrorMessage;
