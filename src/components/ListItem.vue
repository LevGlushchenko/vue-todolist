<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox v-model="todo.complete" @click="completeTodo(todo.id)"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>{{ todo.title }}</v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-row>
        <v-col cols="12" sm="3">
          <v-btn icon @click="editTodo(todo.id)">
            <v-icon dark> mdi-pencil-outline </v-icon>
          </v-btn>
        </v-col>

        <v-col v-if="todo.complete" cols="12" sm="3">
          <v-btn icon color="red" @click="deleteTodo(todo.id)">
            <v-icon dark> mdi-trash-can-outline </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Todo } from '../types';

@Component
export default class ListItem extends Vue {
  @Prop({ type: Object, default: {} }) readonly todo: Todo | undefined;

  private completeTodo(id: string) {
    this.$store.commit('TOGGLE_TODO', id);
  }

  private editTodo(id: string) {
    this.$store.commit('EDIT_TODO', id);
  }

  private deleteTodo(id: string) {
    this.$store.commit('DELETE_TODO', id);
  }
}
</script>

<style></style>
