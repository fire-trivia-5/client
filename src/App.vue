<template>
  <v-app>
      <v-container text-xs-center>
        <v-flex xs10 offset-xs1>
          <v-card dark blue-grey darken-4 style="height: 95vh">
            <Home></Home>
          </v-card>
        </v-flex>
      </v-container>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
