import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
class Flexbox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#bdc3c7',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#34495e', width: 50, height: 50}} />
          <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
          <View style={{backgroundColor: '#3498db', width: 50, height: 50}} />
          <View style={{backgroundColor: '#9b59b6', width: 50, height: 50}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 20,
          }}>
          <Image
            source={{
              uri:
                'https://lh3.googleusercontent.com/a-/AOh14GgFobvq_GPvcdf9bghebXBkVc3pQt9dA5iCVU9QOQ=s360-c',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Candra Dwi Kusuma
            </Text>
            <Text>100ribu subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Flexbox;
