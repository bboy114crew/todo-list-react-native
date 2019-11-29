import React, {
    Component
} from 'react';
import {
    StyleSheet,
} from 'react-native';

import {
    connect
} from 'react-redux';
import FilterTask from '../components/FilterTask';
import deleteTask, {
    finishTask
} from '../actions/FilterTaskAction';
import showIncomplete, {showAll, showCompleted} from '../actions/FilterTaskAction';

class FilterTaskContainer extends Component {
    render() {
        const { onAll, onCompleted, onIncomplete } = this.props;
        return ( 
            <FilterTask {...this.props}/>
        );
    }
}

export default connect(
    state => {
      return {
        myFilterStatus: state.filterStatus
      }
    },
    dispatch => {
      return {
        onAll: () => dispatch(showAll()),
        onCompleted: () => dispatch(showCompleted()),
        onIncomplete: () => dispatch(showIncomplete())
      }
    }
)(FilterTaskContainer);