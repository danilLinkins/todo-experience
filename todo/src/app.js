import { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appMiddleware from './middleware';
import rootReducer from './reducers';
import TodoApp from './container/TodoApp';

const finalCreateStore = compose(
  applyMiddleware(appMiddleware)
)(createStore);

const store = finalCreateStore(rootReducer);

class Demo extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoApp />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector('#app'));
