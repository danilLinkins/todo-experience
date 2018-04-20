import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';
import '../main.scss';

class TodoApp extends Component {
  render() {
    const { todos, todoActions } = this.props;

    return (
      <div className="container main-block pt-5 pb-5">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12">
            <div className="main-content">
                <div className="header p-3">
                    <h1>Check list</h1>
                </div>
                <div className="body p-3">
                    <TodoList todos={todos} actions={todoActions} />
                </div>
                <div className="footer p-3">
                    <TodoAdd actions={todoActions} />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
