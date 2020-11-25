<template>
  <v-list-item v-for="(todo, i) in todos" :key="i">
    <template #default="{ active, toggle }">
      <!-- <v-list-item-action>
            <v-checkbox v-model="active" @click="toggle"></v-checkbox>
          </v-list-item-action> -->

      <v-list-item-content>
        <v-list-item-title :class="{ done: active }">{{ todo.title | capitalize }}</v-list-item-title>
        <v-list-item-subtitle>Added on: {{ date }}{{ ord }} {{ day }} {{ year }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-btn fab ripple small color="red" v-if="active" @click="removeTodo(i)">
        <v-icon class="white--text">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  @Prop(Array) readonly todos: Array<string> | undefined;
}
</script>

<style></style>
