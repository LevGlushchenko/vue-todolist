<template>
  <v-list subheader two-line flat>
    <v-subheader class="subheading" v-if="todos.length === 0">You have 0 Todos, add some</v-subheader>
    <v-subheader class="subheading" v-else>Your Todos</v-subheader>

    <v-list-item-group> </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  @Prop(Array) readonly todos: Array<string> | undefined;
}
</script>

<style></style>
