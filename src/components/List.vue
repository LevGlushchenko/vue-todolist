<template>
  <v-list subheader two-line flat>
    <v-subheader class="subheading" v-if="todos.length === 0">You have 0 Todos, add some</v-subheader>
    <v-subheader class="subheading" v-else>Your Todos</v-subheader>

    <v-list-item-group v-if="todos">
      <ListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ListItem from './ListItem.vue';

@Component({
  components: { ListItem },
})
export default class List extends Vue {
  public get todos() {
    return this.$store.getters.todos;
  }
}
</script>

<style></style>
