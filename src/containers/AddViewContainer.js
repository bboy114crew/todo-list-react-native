import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import AddView from '../components/AddView';
import { connect } from 'react-redux';
import  addTask  from '../actions/AddTaskAction';

class AddViewContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const onAddNewTask = this.props.onAddNewTask;
    return (
      <AddView onAddNewTask= { onAddNewTask } />
    );
  }
}

export default connect( 
  state => {
    return {
      
    }
  },
  dispatch => {
    return {
      onAddNewTask: (name) => dispatch(addTask(name))
    }
  }

)(AddViewContainer);