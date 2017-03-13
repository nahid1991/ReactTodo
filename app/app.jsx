var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

// var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import Login from 'Login';
import TodoApp from 'TodoApp';


// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());
//Load Foundation
// $(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  // <div>
  //     <TodoApp />
  // </div>,
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route>
        <Route path="/">
          <Route path="todos" component={TodoApp}/>
          <IndexRoute component={Login}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
