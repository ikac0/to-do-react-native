import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title})  => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'New Vocabulary'
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#383838'
  },
  text: {
    color: 'orange',
    fontSize: 24,
    textAlign: 'center',
  }
})

export default Header;