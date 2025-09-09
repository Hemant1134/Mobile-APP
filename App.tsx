// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { store } from './src/redux/store';
import { RootNavigator } from './src/navigation';
import { lightTheme } from './src/themes/colors';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={lightTheme}>
        <RootNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;