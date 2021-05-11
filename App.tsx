import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Router from './src/router';
import reducer from './src/redux/store/reducer';
import { View } from 'react-native';

const App: React.FC = () => {

  const persistedReducer = persistReducer({
    key: 'root',
    storage: AsyncStorage
  }, reducer);

  const store: Store<ThemeState, ThemeAction> & {
    dispatch: DispatchType
  } = createStore(persistedReducer, applyMiddleware(thunk));

  const persistor = persistStore(store);

  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;