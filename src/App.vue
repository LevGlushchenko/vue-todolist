<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container class="fill-height">
          <v-row justify="center">
            <v-col cols="6">
              <h1 class="text-h2 text-center mb-5">Todo List</h1>

              <TodoForm @add-todo="addTodo" />
              <TodoList :todos.sync="sortedTodos" />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { v4 as uuid } from 'uuid';
import { Todo } from '@/types';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';

@Component({
  components: { TodoForm, TodoList },
})
export default class App extends Vue {
  private todos: Array<Todo> = [];

  private created(): void {
    if (localStorage.getItem('todoList')) {
      this.todos = JSON.parse(<string>localStorage.getItem('todoList'));
    } else {
      this.todos = [];
    }
  }

  public get sortedTodos(): Array<Todo> {
    return this.todos.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  private addTodo(value: string): void {
    const newTodo: Todo = {
      id: uuid(),
      date: new Date().toString(),
      title: value,
      isComplete: false,
    };

    this.todos.push(newTodo);
    localStorage.setItem('todoList', JSON.stringify(this.todos));
  }
}
</script>
