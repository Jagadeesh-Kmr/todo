import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TiEdit} from 'react-icons/ti'

import './index.css'

class TodoLists extends Component {
  state = {
    onSubmit: false,
  }

  onClickCheckbox = () => {
    const {isCheckId, todoLists} = this.props

    this.setState(prevState => ({
      onSubmit: !prevState.onSubmit,
    }))
    isCheckId(todoLists.id)
  }

  render() {
    const {todoLists, deleteList, editList, emptyInputValue} = this.props
    const {inputValue, id} = todoLists

    const onRemoveList = () => {
      deleteList(id)
    }

    const onEditList = () => {
      editList(id, inputValue)
    }

    const inputLen = inputValue.length === 0

    const {onSubmit} = this.state
    const inputClassName = onSubmit ? 'task-line-through' : 'task'

    return (
      <>
        {inputLen ? (
          <p className="empty-list-heading">{emptyInputValue}</p>
        ) : (
          <li className="todo-li">
            <div className="input-value-container">
              <input
                type="checkbox"
                className="check-box-input"
                onClick={this.onClickCheckbox}
              />
              <p className={inputClassName}>{inputValue}</p>
            </div>
            <div className="buttons-container">
              <button
                type="button"
                className="icon-button"
                onClick={onEditList}
              >
                <TiEdit color="#ffffff" size={20} />
              </button>
              <button
                className="icon-button"
                type="button"
                onClick={onRemoveList}
              >
                <AiFillCloseCircle color="#ffffff" size={20} />
              </button>
            </div>
          </li>
        )}
      </>
    )
  }
}

export default TodoLists
