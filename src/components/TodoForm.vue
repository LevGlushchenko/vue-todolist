<template>
  <v-form ref="form" @submit.prevent="addTodo">
    <v-text-field v-model="value" :rules="todoRules" label="Add todo" required @blur="onBlur"></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  $refs!: {
    form: HTMLFormElement;
  };

  private value: string = '';
  private todoRules: Array<any> = [(v: any) => !!v || 'Required field'];

  private addTodo() {
    if (this.value) {
      this.$emit('add-todo', this.value);
      this.$refs.form.reset();
    } else {
      this.$refs.form.validate();
    }
  }

  private onBlur() {
    this.$refs.form.reset();
  }
}
</script>
