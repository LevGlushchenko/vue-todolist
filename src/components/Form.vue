<template>
  <v-form ref="form" @submit.prevent="submitHandler">
    <v-text-field v-model="value" :rules="todoRules" label="Add todo" required></v-text-field>
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

  private submitHandler() {
    this.$store.commit('ADD_TODO', this.value);
    this.$refs.form.reset();
  }
}
</script>

<style lang="scss"></style>
