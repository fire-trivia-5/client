<template>
  <div id="Result" >
    <v-container style="border:15px">
      <v-layout
        align-center justify-center column
        style="border:1px solid black;margin: 0px 30px 0px 30px"
      >
      <div style="margin-top:10px;" v-if="winner.name == currentUser">
        <h3 style="  font-size: 35px;">congratulation {{winner.name}}, you win</h3>
      </div>  
       <div style="margin-top:10px;" v-else>
        <h3 style="  font-size: 35px;">you fuckin losee</h3>
      </div>
        <br>
        <div style="margin-bottom:25px">
        <v-avatar size="150px" color="teal">
          <img src="@/assets/doraemon.jpg">
          <span class="white--text headline">{{rooms[0].name}}</span>
        </v-avatar>
        <v-avatar size="80px" color="teal">
          <span class="white--text headline">{{rooms[0].score}}</span>
        </v-avatar>
        vs

        <v-avatar size="80px" color="teal">
          <span class="white--text headline">{{rooms[1].score}}</span>
        </v-avatar>
        <v-avatar size="150px" color="teal">

           <img src="@/assets/sinchan.jpeg">
          <span class="white--text headline">{{rooms[1].name}}</span>
        </v-avatar>
        
        </div>
        <div>
          <v-btn dark  @click="finishGame">end game</v-btn>
        </div>
      </v-layout>
      
    
    </v-container>

  </div>
</template>

<script>
export default {
  name: "Result", 
  computed: {
    winner() {
      console.log('masuk sini', this.$store.state.roomList);
      
      //  return this.$store.state.rooms
      let score = 0;
      let winner = {};
      this.$store.state.roomList.forEach(player => {
        if (player.score > score) {
          score = player.score;
          winner = player;
        }
      });
      return winner;
    },
    rooms() {
      // console.log(this.$store.state.rooms);

      return this.$store.state.rooms;
    },
    currentUser() {
      return localStorage.getItem('name')
    }
  },
  methods : {
    finishGame() {
      this.$store.commit('finishGame')
    }
  }
};
</script>

