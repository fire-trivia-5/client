<template>
    <div class="container" style="width:400px;">   
        <v-form
            ref="form"
            v-if="isCreate"
        >
            <v-text-field
            v-model="name"
            label="Name"
            required
            ></v-text-field>

            <v-btn
            @click="createUser"
            class="button"
            style="background:blue; color:white;"
            :href="room.id" 
            >
            create
            </v-btn>

        </v-form>
    </div>
</template>

<script>
export default {
    props: ['room'],
    data() {
        return {
            name: '',
            isCreate: true
        }
    },
    methods: {
        createUser(){
            console.log('masuk')
            this.$emit('username', {username: this.name, room: this.room})
            this.name = ''
        }
    }
}
</script>


<style>
</style>