<template>
  <v-app>
    <audio controls autoplay style="display:none">
      <source src="http://www.noiseaddicts.com/samples_1w72b820/290.mp3" type="audio/mpeg">
    </audio>
      <v-container text-xs-center>
        <v-flex xs10 offset-xs1>
          <v-hover>
            <v-card 
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              dark blue-grey lighten-4 
              style="height: 95vh;background: linear-gradient(to right, #ffff1c, #00c3ff)">
              <router-view></router-view>
            </v-card>
          </v-hover>
        </v-flex>
      </v-container>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'
import playingroom from './views/Play.vue'
import Result from './views/Result.vue'

export default {
  name: 'App',
  // computed : {
  //   page() {
  //     return this.$store.state.page
  //   }
  // },
  components: {
    Home,
    playingroom,
    Result
  }
}
</script>

