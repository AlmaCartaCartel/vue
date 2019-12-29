<template>
  <li> 
      <span v-bind:class="{done: todo.completed}">
          <input type="checkbox" v-on:change="todo.completed = !todo.completed">
          <strong>{{ index + 1 }}</strong>
          <router-link v-bind:to=" '/todos/' + todo.title" >{{ todo.title | upercase}}</router-link>
      </span>
      <button class="delete"
        v-on:click="$emit('removetodo', todo.id)"
      >&times;</button>
  </li>
</template>

<script>
export default {
    props:{
        todo:{
            type: Object,
            required: true
        },
        index: Number
    },
    filters:{
        upercase(value){
            return value[0].toUpperCase() + value.substr(1);
        }
    }
}
</script>

<style scoped>
    li{
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .delete{
        background-color: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }
    input{
        margin-right: 1rem;
    }
    .done{
        text-decoration: line-through;
    }
</style>