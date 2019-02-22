<template>
  <div>
    <br>
    <v-layout align-center justify-space-around row fill-height>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">{{room.players[0].name}}</span>
      </v-avatar>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">{{timer}}</span>
      </v-avatar>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">{{room.players[0].name}}</span>
      </v-avatar>
    </v-layout>
    <br>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card color="blue-grey darken-2" class="white--text" style="border-radius:15px">
          <v-card-text>
            <h2>
              {{quiz[page].question}}
            </h2>
          </v-card-text>
        </v-card>
        <br>
        <div v-for="(answer, index) in randomOrder" :key="index">
          <v-hover>
            <v-card 
            @click.prevent="[playSoundAndAnswer('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3', randomOrder[index])]"
            color="black" style="cursor:pointer;border-radius:15px" 
            class="white--text animated bounce"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`">
              <h2>{{randomOrder[index]}}</h2>
            </v-card>
          </v-hover>
          <br>
        </div>
      </v-flex>      
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'playingroom',
  data () {
    return {
      route: "",
      page: 0,
      second : 10
    }
  },
  created() {
    this.$store.dispatch('getRoom')
    this.$store.dispatch('getQuiz')
    
  },
  computed: {
    ...mapState([
      'roomList',
      'quiz'
    ]),
    room() {
      this.route = this.$route.params.roomId
      console.log()
      for (let i = 0; i <= this.roomList.length-1; i++) {
        if (this.roomList[i].id == this.route) {
          return this.roomList[i]
        }
      }
    }, 
    randomOrder() {
      let quizInOrder = this.quiz[this.page].incorrect_answers
      quizInOrder.push(this.quiz[this.page].correct_answer)
      for (var i = quizInOrder.length-1; i >=0; i--) {
          var randomIndex = Math.floor(Math.random()*(i+1)); 
          var itemAtIndex = quizInOrder[randomIndex]; 
          
          quizInOrder[randomIndex] = quizInOrder[i]; 
          quizInOrder[i] = itemAtIndex;
      }
      return quizInOrder;
    },
    timer() {
      let audio = new Audio('http://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3')
      let timer = setTimeout(() => {
        if (this.second <= 6) {
          setTimeout(() => {
            audio.play()
          }, 0)
        }
        this.second -= 1
        if(this.second === 0) {
          clearTimeout(timer)
          this.page += 1
          this.second = 10
        }
      }, 1000)
      return this.second
    }
  }, 
  methods: {
    playSoundAndAnswer (sound, answer) {
      if(sound) {
        let audio = new Audio(sound);
        audio.play();
      }
      if (answer !== this.quiz[this.page].correct_answer) {

        console.log('wrong')
      } else {
        console.log('right')
      }
    }
    
  }
}
</script>
