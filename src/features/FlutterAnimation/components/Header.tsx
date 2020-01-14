import * as React from 'react';
import {
  View, StyleSheet, Image, Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Section } from './Model';

interface HeaderProps {
  section: Section;
};

const { width } = Dimensions.get('window');

export default class Header extends React.PureComponent<HeaderProps> {
  render() {
    const { section } = this.props;
    const colors = [section.leftColor, section.rightColor];
    return (
      <View style={styles.container}>
        <Image source={section.image} style={styles.image} />
        <LinearGradient
          style={styles.gradient}
          start={[0, 0]}
          end={[1, 0]}
          {...{ colors }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9,
  },
});
