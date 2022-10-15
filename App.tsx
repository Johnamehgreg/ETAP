import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './screen/HomeScreen/HomeScreen';
// import HomeScreen from './screen/HomeScreen/homeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <HomeScreen />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
