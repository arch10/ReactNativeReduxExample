import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
