import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import HomeScreen from './screen/HomeScreen/homeScreen';
import RouteNavigation from './src/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import store, { persistor } from './src/ReduxStore/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";



const queryClient = new QueryClient();

const App:React.FC = () => {


  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <RouteNavigation />


          </SafeAreaView>
        </PersistGate>
      </Provider>

    </QueryClientProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App
