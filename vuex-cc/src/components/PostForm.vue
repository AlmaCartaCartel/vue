<template>
  <form action=""  @submit.prevent="addNewPost">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">

    <button>add</button>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data(){
        return {
            title: '',
            body: ''
        }
    },
    methods:{
        ...mapMutations(['createPost']),
        addNewPost(){
            this.createPost({
                title: this.title, 
                body: this.body,
                id: Date.now()
                })
        }
    }
}
</script>

<style scoped>

</style>