import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import cart from '../../assets/images/anak.jpg';
const Position = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.logo} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang belanja anda</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#27ae60',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#27ae60',
    padding: 5,
    borderRadius: 25,
    width: 25,
    height: 25,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
