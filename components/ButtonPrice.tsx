import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ButtonPriceComponent = ({children}: {children: any}) => {
  console.log(children, 'children');

  return <View style={stylesPrice.container}>{children}</View>;
};

const stylesPrice = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});
