<template>
  <div>
    <h1>Querying GraphQL via Apollo in VueJS</h1>
    <h2>{{ msg }} {{ artists }} queries are: {{this.$apollo.queries}}</h2>
    <ApolloQuery :query="this.apollo.artists.query">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <div v-else-if="data" class="result apollo">{{ data.artists }}</div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import register from "../hooks";

@Component
export default class Test extends Vue {
  @Prop() private msg!: string;
  get apollo () {
    return {
      artists: {
        query: gql`{artists {name}}`,
        prefetch: true
      }
    }
  }
  artists: string[] = ["foo"];
}
</script>