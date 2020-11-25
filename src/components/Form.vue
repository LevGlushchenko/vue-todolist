<template>
  <v-form ref="form" @submit.prevent="submitHandler">
    <v-text-field v-model="todo" :rules="todoRules" :counter="50" label="Add todo" required></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Todo } from '../types';

@Component
export default class Form extends Vue {
  $refs!: {
    form: HTMLFormElement;
  };

  private todo: Todo = {};
  private todoRules: Array<any> = [
    (v: any) => !!v || 'Required field',
    (v: any) => v.length <= 50 || 'Must be less than 50 characters',
  ];

  private submitHandler() {
    this.$emit('submit-form', this.todo);
    this.todo = {};
    this.$refs.form.reset();
  }
}
</script>

<style lang="scss"></style>
