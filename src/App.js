import React from 'react';
import {View, ScrollView} from 'react-native';

import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import Flexbox from './pages/FlexBox';
import Position from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <Flexbox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
