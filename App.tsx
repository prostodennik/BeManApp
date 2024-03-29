/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * *
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import Colors from './components/Colors';
import Header from './pages/Header';
import About from './pages/About';
import Price from './pages/Price';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.darker : Colors.white,
          }}>
          <Header />
          <About />
          <Price />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
