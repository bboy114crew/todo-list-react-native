//state
let appState = {
  data: [{
    title: 'Thang', isFinished: false
  }],
  filterStatus: 'SHOW_ALL'
}


//reducer
export const reducer = (state = appState, action) => {

  let newTaskList = state.data;
  switch (action.type) {
    case 'ADD':
      const newTask = { title: action.taskName, isFinished: false }
      return { ...state, data: [...newTaskList, newTask] }
    case 'FINISH':
      newTaskList[action.atIndex].isFinished = true;
      newTaskList = JSON.parse(JSON.stringify(newTaskList));
      return { ...state, data: newTaskList };
    case 'DELETE':
      newTaskList = newTaskList.filter((item, i) => i !== action.atIndex);
      return { ...state, data: newTaskList };
    case 'FILTER_ALL':
      return {
        ...state,
        filterStatus: 'SHOW_ALL'
      }
    case 'FILTER_COMPLETED':
      return {
        ...state,
        filterStatus: 'COMPLETED'
      }
    case 'FILTER_INCOMPLETE':
      return {
        ...state,
        filterStatus: 'INCOMPLETE'
      }
    default:
      break;
  }
  return state;
}

