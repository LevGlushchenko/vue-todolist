<template>
  <v-list subheader two-line flat data-test="todo-list">
    <v-subheader class="subheading">{{ listSubheader }}</v-subheader>

    <template v-if="todos && todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo="deleteTodo" />
    </template>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Todo } from '@/types';
import TodoListItem from '@/components/TodoListItem.vue';

@Component({
  components: { TodoListItem },
})
export default class List extends Vue {
  @Prop({ type: Array, default: [] }) readonly todos!: Array<Todo>;

  public get listSubheader(): string {
    if (this.todos && this.todos.length) {
      return 'Your Todos';
    }

    return 'You have 0 Todos, add some';
  }

  private deleteTodo(todoId: string): void {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos.splice(todoIndex, 1);

    if (this.todos.length === 0) {
      localStorage.removeItem('todoList');
    } else {
      localStorage.setItem('todoList', JSON.stringify(this.todos));
    }
  }
}
</script>
