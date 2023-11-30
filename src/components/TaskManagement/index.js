import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoLists from '../TodoLists'
import StoredTodoList from '../StoredTodoList'

import './index.css'

class TaskManagement extends Component {
  state = {
    inputValue: '',
    todoList: [],
    search: '',
    errorMsg: '',
    emptyInput: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {inputValue, checked} = this.state
    const newList = {
      id: uuidv4(),
      inputValue,
      checked,
    }
    if (inputValue.length === 0) {
      this.setState({errorMsg: '*Enter task', emptyInput: ''})
    } else {
      this.setState({errorMsg: '', emptyInput: ''})
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newList],
      inputValue: '',
    }))
  }

  onChangeInputValue = e => {
    this.setState({inputValue: e.target.value})
  }

  renderInputContainer = () => {
    const {inputValue, errorMsg} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <input
          type="text"
          className="input"
          onChange={this.onChangeInputValue}
          value={inputValue}
        />
        <p className="error-msg">{errorMsg}</p>
        <button type="submit" className="button">
          Add Task
        </button>
      </form>
    )
  }

  deleteList = id => {
    const {todoList} = this.state
    const updatedList = todoList.filter(eachData => eachData.id !== id)
    this.setState({
      todoList: updatedList,
    })
    localStorage.removeItem('todoList')
  }

  editList = (id, newValue) => {
    const {todoList} = this.state
    const updatedList = todoList.filter(eachData => eachData.id !== id)
    this.setState({
      todoList: updatedList,
    })
    this.setState({inputValue: newValue})
  }

  searchInput = event => {
    this.setState({search: event.target.value})
  }

  renderSearchBar = () => (
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        onChange={this.searchInput}
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
        alt="search icon"
        className="search-icon"
      />
    </div>
  )

  onClickSaveButton = () => {
    const {todoList} = this.state
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  renderStoredList = () => {
    const storedTask = JSON.parse(localStorage.getItem('todoList'))
    const {emptyInput, checked} = this.state

    return (
      <>
        {storedTask === null ? (
          ''
        ) : (
          <ul className="todo-ul">
            {storedTask.map(eachData => (
              <StoredTodoList
                key={eachData.id}
                todoLists={eachData}
                deleteList={this.deleteList}
                editList={this.editList}
                emptyInputValue={emptyInput}
                isCheckId={this.isChecked}
                checked={checked}
              />
            ))}
          </ul>
        )}
      </>
    )
  }

  renderTodoLists = () => {
    const {todoList, search, emptyInput} = this.state
    const searchResults = todoList.filter(eachData =>
      eachData.inputValue.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <ul className="todo-ul">
        {searchResults.map(eachData => (
          <TodoLists
            key={eachData.id}
            todoLists={eachData}
            deleteList={this.deleteList}
            editList={this.editList}
            emptyInputValue={emptyInput}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <div className="task-management-container">
          <h1 className="task-management-h1">Task Management</h1>
          <p className="tasks">Create Task</p>
          <div className="input-container">
            {this.renderInputContainer()}
            <p className="tasks">My Tasks</p>
            {this.renderSearchBar()}
            {this.renderTodoLists()}
            {this.renderStoredList()}
            <button
              type="button"
              className="button"
              onClick={this.onClickSaveButton}
            >
              Save
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default TaskManagement
