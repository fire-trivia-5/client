<template>
  <div>
    <v-layout align-start justify-center row fill-height>
      <v-flex>
        <CreateRoom></CreateRoom>
      </v-flex>
      <v-flex>
        <RoomList></RoomList>
      </v-flex>
    </v-layout> 
  </div>
</template>

<script>
import CreateRoom from '@/components/CreateRoom.vue'
import RoomList from '@/components/RoomList.vue'
export default {
  name: 'home',
  components: {
    CreateRoom,
    RoomList
  },
  created() {
    this.$store.dispatch('getRoom')
  }
}
</script>
