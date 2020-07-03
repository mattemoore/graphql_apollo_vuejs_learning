<template>
  <div>
    <h1>Querying GraphQL via Apollo in VueJS</h1>
    <h2>{{ msg }}</h2>

    <ApolloQuery :query="this.apollo.albums.query" :variables="{ artistID: '1' }">
      <template v-slot="{ result: { data } }">
        <div v-if="data" class="result apollo">
          <ul style="list-style-type: none;">
            <li v-for="album in data.albums" v-bind:key="album.id">
              <div>{{ album.title }}</div>
            </li>
          </ul>
        </div>
      </template>
    </ApolloQuery>

    <ApolloQuery :query="this.apollo.artists.query">
      <template v-slot="{ result: { data } }">
        <div v-if="data" class="result apollo">
          <ul style="list-style-type: none;">
            <li v-for="artist in data.artists" v-bind:key="artist.id">
              <div>{{ artist.name }}</div>
              
            </li>
          </ul>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import gql from "graphql-tag";

@Component
export default class Test extends Vue {
  @Prop() private msg!: string;
  get apollo () {
    return {
      artists: {
        query: gql`{artists {name id}}`
      },
      albums: {
        query: gql`query getAlbums($artistID: ID!) { albums(artistID: $artistID) {title}}`
      }
    }
  }
  showAlbums(artistId: string) {
    console.log(artistId);
  }
}



</script>