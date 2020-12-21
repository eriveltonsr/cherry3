import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function ButtonOK(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.disposeModal}>
      <Text style={styles.textButton}>OK</Text>
    </TouchableOpacity>
  );
}

export default ButtonOK;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C276',
    height: 42,
    marginBottom: 20,
    borderRadius: 5,
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Open Sans SemiBold',
  },
});
