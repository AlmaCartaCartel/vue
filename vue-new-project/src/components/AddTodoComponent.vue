<template>
  <form action="" @submit.prevent="onSubmit">
      <input type="text" v-model="title">
      <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            title: ''
        }
    },
    methods:{
        onSubmit: function(){
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }

            this.$emit('addTodo', newTodo);
            this.title = '';
        }
    }
}
</script>

<style scope>
    form{
        display: flex;
    }
    input{
        width: 400px;
    }
</style>