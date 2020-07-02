<template>
  <div>
    <h1>Querying GraphQL via Apollo in VueJS</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Test extends Vue {
  @Prop() private msg!: string;
}
</script>
