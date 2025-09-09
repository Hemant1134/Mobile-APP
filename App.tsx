import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '@/redux/store';
import { AppNavigator } from '@/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;