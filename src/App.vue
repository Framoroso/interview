<template>
  <v-app id="app">
    <h2 style="margin-bottom: 75px">
      Vue Test - University Search
    </h2>
    <v-container>
      <div v-if="!searchUniversitiesPending">
        <v-autocomplete
            v-model="selected"
            :items="universities"
            item-text="name"
            label="Search University"
            outlined
        ></v-autocomplete>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

const {mapState: mapUniversitiesState, mapActions: mapUniversitiesActions} = createNamespacedHelpers('universities')

export default {
  name: 'App',
  components: {},
  data() {
    return {
      selected: []
    }
  },
  computed: {
    ...mapUniversitiesState([
      'universities',
      'searchUniversitiesPending'
    ])
  },
  async created() {
    await this.searchUniversities()
  },
  methods: {
    ...mapUniversitiesActions([
      'searchUniversities'
    ])
  }
}
</script>

<style>
html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px
}
</style>
