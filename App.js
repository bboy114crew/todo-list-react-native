import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import AddViewContainer from './src/containers/AddViewContainer';
import TaskListContainer from './src/containers/TaskListContainer';
import FilterTaskContainer from './src/containers/FilterTaskContainer';
import createAppStore from './src/stores/index';

const { persistor, store } = createAppStore()

export default class Todo extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <Provider
        store={store}>
        <View style = { styles.container }>
          <AddViewContainer />
          <TaskListContainer />
          <FilterTaskContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});
