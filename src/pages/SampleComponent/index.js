import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#3498db'}} />
      <Text>halo</Text>
      <Candra />
      <Text>Mila</Text>
      <Photo />
      <TextInput style={{borderWidth: 2}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Candra = () => {
  return <Text>Candra Dwi Kusuma</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini dibuat dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{fontSize: 24, color: 'blue'}}>Ini gambar hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
