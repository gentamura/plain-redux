/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import { createStore } from 'redux';

let nextTodoId = 0;

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: false
        })
      }
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo => {
          if (todo.id !== action.id) return todo;

          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        })
      }
    default:
      return state;
  }
};

const store = createStore(reducer, {todos: []});

store.subscribe(() => console.log(store.getState()));


console.log('Add shopping');
store.dispatch(addTodo('Go to shopping'));

console.log('Add bank');
store.dispatch(addTodo('Go to a bank'));

console.log('Done shopping');
store.dispatch(toggleTodo(0));
