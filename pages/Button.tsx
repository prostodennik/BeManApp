import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Colors from '../components/Colors';

type BtnProps = {
  textBtn?: string;
  styleBtn?: any;
  styleText?: any;
  onPress?: () => void;
};

const Btn = ({
  textBtn = 'Записаться',
  onPress,
  styleBtn = {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    width: 200,
  },
  styleText = {color: 'white', textTransform: 'uppercase', fontWeight: 'bold'},
}: BtnProps) => {
  return (
    <View style={styles.center}>
      <TouchableOpacity style={styleBtn} onPress={onPress}>
        <Text style={styleText}>{textBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Btn;
