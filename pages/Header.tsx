import React from 'react';
import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
import Colors from '../components/Colors';
import Button from './Button';

const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole="image"
      source={require('../assets/top.png')}
      style={styles.bg}
      imageStyle={[
        styles.bg,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}>
      <Text style={styles.title}>BE MAN</Text>
      <Text style={styles.text}>
        Место, где каждый{'\n'}будет чувствовать{'\n'}себя джентльменом
      </Text>
      <Button />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    resizeMode: 'cover',
    height: 700,
    backgroundColor: '#fff',
    paddingTop: 150,
  },
  title: {
    fontSize: 70,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.primary,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
  },
});

export default Header;
