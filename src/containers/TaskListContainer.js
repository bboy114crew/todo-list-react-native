import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import TaskFlatList from '../components/TaskFlatList';
import deleteTask, {
    finishTask
} from '../actions/TaskListAction';

class TaskListContainer extends Component {
    getWordList() {
        const {
            data
        } = this.props.listData;
        const {
            myFilter
        } = this.props;
        if (myFilter === 'COMPLETED') {
            return data.filter(e => e.isFinished);
        }
        if (myFilter === 'INCOMPLETE') {
            return data.filter(e => !e.isFinished);
        }
        return data;
    }
    render() {
        const {
            onFinishedItem,
            onDeleteItem
        } = this.props;
        return ( 
        <TaskFlatList 
        dataList = {this.getWordList()} { ...this.props}
        />
        );
    }
}

export default connect(
    state => {
        return {
            listData: state.todo,
            myFilter: state.todo.filterStatus
        }
    },
    dispatch => {
        return {
            onFinishedItem: (index) => dispatch(finishTask(index)),
            onDeleteItem: (index) => dispatch(deleteTask(index))
        }
    }
)(TaskListContainer);