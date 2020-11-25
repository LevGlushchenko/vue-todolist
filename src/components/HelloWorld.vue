<template>
  <div class="hello-world">
    <h1>Hello world!</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component<HelloWorld>({})
export default class HelloWorld extends Vue {}
</script>

<style></style>
