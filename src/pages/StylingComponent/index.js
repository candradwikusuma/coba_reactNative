import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import anak from '../../assets/images/anak.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={style.text}>Ini styling</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3498db',
          borderWidth: 2,
          borderColor: '#9b59b6',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 10,
        }}>
        <Image
          source={anak}
          style={{width: 188, height: 107, borderRadius: 10}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Donasi Anak
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#d35400',
          }}>
          Rp 5.000.000,-
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 12,
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#27ae60',
            borderRadius: 20,
            paddingVertical: 6,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Donasi
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginTop: 40,
    marginLeft: 20,
  },
});

export default StylingComponent;
