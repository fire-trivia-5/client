<template>
  <div>
    <br>
    <v-layout align-center justify-space-around row fill-height>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">C</span>
      </v-avatar>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">T</span>
      </v-avatar>
    </v-layout>
    <br>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-text>
            <h2>Listen to your favorite artists and albums whenever and wherever, online and offline.
              Listen to your favorite artists and albums whenever and wherever, online and offline.
              Listen to your favorite artists and albums whenever and wherever, online and offline.
            </h2>
          </v-card-text>
        </v-card>
        <br>
        <v-card color="white" style="text-color:black" class="white--text">
          <h2>Listen to your favorite artists and albums whenever and wherever, online and offline.</h2>
        </v-card>
      </v-flex>      
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PlayRoom',
  data () {
    return {
      player1: {
        name: 'Celyn',
        score: 0
      },
      player2: {
        name: 'There',
        score: 0
      }
    }
  },
  created() {
    this.$store.dispatch('getRoom')
  },
  computed: {
    ...mapState([
      'rooms',
    ])
  }
}
</script>
