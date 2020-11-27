import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Home = () => {
  return(
    <View style={styles.container}>
      <Text>I'm still alive..</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home