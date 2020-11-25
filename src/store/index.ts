import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuid } from 'uuid';
import { Todo } from '../types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => {
      return state.todos.sort((a, b) => {
        // @ts-ignore
        return new Date(b.date) - new Date(a.date);
      });
    },
  },
  mutations: {
    ADD_TODO(state, title) {
      const todo: Todo = {
        id: uuid(),
        // @ts-ignore
        date: new Date().toISOString(),
        title: title,
        complete: false,
      };

      // @ts-ignore
      state.todos.push(todo);
    },
    TOGGLE_TODO(state, id) {
      // @ts-ignore
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      const todo = state.todos[todoIndex];

      // @ts-ignore
      todo.complete ? (todo.complete = false) : (todo.complete = true);
    },
    DELETE_TODO(state, id) {
      // @ts-ignore
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);

      if (todoIndex > -1) {
        state.todos.splice(todoIndex, 1);
      }
    },
  },
  actions: {},
});
