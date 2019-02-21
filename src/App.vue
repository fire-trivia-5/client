<template>
  <v-app>
      <v-container text-xs-center>
        <v-flex xs10 offset-xs1>
          <v-hover>
            <v-card 
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              dark blue-grey darken-4 
              style="height: 95vh;background: linear-gradient(to right, #ffff1c, #00c3ff)">
              <PlayRoom></PlayRoom>
            </v-card>
          </v-hover>
        </v-flex>
      </v-container>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'
import PlayRoom from './views/Play.vue'

export default {
  name: 'App',
  components: {
    Home,
    PlayRoom
  }
}
</script>

