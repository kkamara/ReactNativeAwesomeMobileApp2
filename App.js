import { StatusBar } from 'expo-status-bar';
import { useEffect, } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('auth_key');
        console.log(value)
        if (value !== null) {
          // value previously stored
        }
      } catch (e) {
        // error reading value
      }
    }
    getData()
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
