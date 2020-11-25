<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container class="fill-height">
          <v-row justify="center">
            <v-col cols="6">
              <h1 class="text-h2 text-center mb-5">Todo List</h1>

              <Form />
              <List />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Form from '@/components/Form.vue';
import List from '@/components/List.vue';

@Component({
  components: { Form, List },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
