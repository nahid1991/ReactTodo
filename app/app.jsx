var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');


store.subscribe(() => {
  var state = store.getState();

  console.log('New state', state);

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

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
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
