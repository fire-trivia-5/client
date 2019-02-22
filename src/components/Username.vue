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
            @click="createUser(room.id)"
            class="button"
            style="background:blue; color:white;"
            
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
        createUser(id){
            
            this.$store.dispatch('addUser', {username: this.name, room: this.room} )
            // this.$emit('username', {username: this.name, room: this.room})
            this.name = ''
            this.$router.push({path: `/${id}`})
        }
    }
}
</script>


<style>
</style>