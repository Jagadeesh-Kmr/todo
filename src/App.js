import {Switch, Route, Redirect} from 'react-router-dom'

import TaskManagement from './components/TaskManagement'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={TaskManagement} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App

/*
# Project Explanation
  Constructed an Task Management Application using React that allows users to
  add, edit, delete tasks, and mark tasks as completed.
  
  - TaskManagment Route
    - Users can add thier daily tasks using create task input feild.
    - After entering tasks and clicking on "Add Task" button entered tasks will be shown below otherwise an "error message" will be shown.
    - Users can also use search bar to search any particular task.
    - Users can use the "check box" input feild to strike the completed task.
    - Users can edit the task by clicking on "edit" button.
    - Users can delete the task by clicking on "delete" button.
    - Users can use the "Save" button to Save the tasks in the browser's local Storage so that the tasks
      persist even after a page refresh.

  
 
# Technologies Used
  - React js, JS, HTML, CSS, Bootstrap, Routing, Local Storage.




 onSubmitForm = event => {
    event.preventDefault()

    const {input} = this.state
    const newList = {
      id: uuidv4(),
      input,
    }
    if (input.length === 0) {
      this.setState({errorMSg: '*Required Details'})
    } else {
      this.setState({errorMSg: ''})
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newList],
      task: '',
    }))
  }

  if (storedTask.length === 0) {
      return []
    }
    return storedTask
*/
