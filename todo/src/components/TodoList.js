import { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.retrieve();
  }

  removeTodo(id) {
    this.props.actions.remove(id);
  }

  editTodo(id) {
    this.props.actions.edit(title, id);
  }

  render() {
    const todoItems = this.props.todos.map((item, index) =>
      <Todo key={item.id} title={item.title} removeTodo={this.removeTodo.bind(this, item.id)} />
    );

    return (
      <ul className="todo-list list-group">
        {todoItems}
      </ul>
    );
  }
}
