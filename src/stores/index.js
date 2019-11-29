import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { reducer } from '../reducers/reducers';

const config = {
  key: 'root',
  storage,
}

const persistReducer = persistCombineReducers(config, {todo:reducer});

const createAppStore = () => {
  let store = createStore(persistReducer)
  let persistor = persistStore(store)
  return { persistor, store }
}

export default createAppStore;
