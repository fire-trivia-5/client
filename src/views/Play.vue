<template>
  <div>
    <br>
    <v-layout align-center justify-space-around row fill-height>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">{{room.players[0].name}}</span>
      </v-avatar>
      <h1>{{room.players[0].score}}</h1>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">{{timer}}</span>
      </v-avatar>
      <v-avatar size="80px" color="teal">
        <span class="white--text headline">{{room.players[1].name}}</span>
      </v-avatar>
         <h1>{{room.players[1].score}}</h1>   
    </v-layout>
    <br>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card color="blue-grey darken-2" class="white--text" style="border-radius:15px">
          <v-card-text>
            <h2 v-html="quiz[page].question">
              {{quiz[page].question}}
            </h2>
          </v-card-text>
        </v-card>
        <br>
        <div v-for="(answer, index) in randomOrder" :key="index">
          <v-hover>
            <v-card 
            @click.prevent="[playSoundAndAnswer('http://soundbible.com/mp3/Yess-Fabio_Farinelli-187689388.mp3', randomOrder[index], 'http://soundbible.com/mp3/efx_NO-Fabio_Farinelli-955789468.mp3')]"
            color="black" style="cursor:pointer;border-radius:15px" 
            class="white--text animated bounce"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            v-html="randomOrder[index]">
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
      second : 10,
      player: localStorage.getItem('name'),
      chance:1
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
    disabled() {
      return true
    },
    room() {
      this.route = this.$route.params.roomId
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
            this.chance = 1
        }
      }, 1000)
      if (this.page === 10) {
        this.$router.push({path: `/${this.route}/result`})
      }
      return this.second
    }
  }, 
  methods: {
    playSoundAndAnswer (sound, answer, soundWrong) {
      if(this.chance > 0) {
        if (answer !== this.quiz[this.page].correct_answer) {
          this.chance -= 1
  
          if(soundWrong) {
            let audioWrong = new Audio(soundWrong);
            audioWrong.play();
          }
          console.log('wrong')
        } else {
          this.chance -= 1
          if(sound) {
            let audio = new Audio(sound);
            audio.play();
          }
          this.$store.commit('updateScore', {player: this.player, score: this.score += 1, roomId: this.route})
          console.log('right')
        }

      }
    }
    
  }
}
</script>
