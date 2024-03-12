import React from 'react'; // Import the 'React' module

import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import Colors from './Colors';

type SectionProps = PropsWithChildren<{
  title: string;
  button: React.ReactNode;
  children?: React.ReactNode;
  subTitle?: string;
  ButtonPrice?: React.ReactNode;
}>;

export function Section({
  children,
  title,
  button,
  subTitle,
  ButtonPrice,
}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(children);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          // styles.sectionDescription,
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {title}
      </Text>
      {subTitle && <Text style={styles.sectionDescription}>{subTitle}</Text>}
      <View>{ButtonPrice && ButtonPrice}</View>
      {children &&
        (typeof children === 'string' ? (
          <Text style={styles.sectionDescription}>{children}</Text>
        ) : (
          <View style={styles.textPadding}>{children}</View>
        ))}
      {button && button}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.primary,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  textPadding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
