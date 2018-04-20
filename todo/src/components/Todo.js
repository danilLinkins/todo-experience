import { Component } from 'react';
import './Todo.scss';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item">
        { this.props.title }
        <button type="button" className="remove btn-mini btn btn-outline-danger btn-sm float-right"
          onClick={this.props.removeTodo}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button type="button" className="edit btn-mini btn btn-primary btn-sm float-right"
          onClick={this.props.editTodo}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
      </li>
    );
  }
}
