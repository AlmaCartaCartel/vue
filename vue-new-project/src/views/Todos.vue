<template>
  <div>
    <h2>Todo aplication</h2>
    <router-link to="/">home</router-link>
    <hr>
    <AddTodo 
        @addTodo="addTodo"/>

    <select v-model="filter">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="notcompleted">notcompleted</option>
    </select>
    <Loader v-if="loading"/>
    <TodoList 
      v-else-if="filterTodos.length"
      v-bind:todos="filterTodos"
      v-on:remove="removeTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodoComponent';
import Loader from '@/components/Loader';

export default {
  name: 'app',
  data() {
      return{
        todos:[],
        loading: true,
        filter: 'all'
      }
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  computed:{
    filterTodos: function(){
      if(this.filter === 'all'){
        return this.todos;
      } 
      if(this.filter === 'completed'){
        return this.todos.filter(t => t.completed === true)
      } 
      if(this.filter === 'notcompleted'){
        return this.todos.filter(t => t.completed === false)
      }
      return [];
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json =>{
          this.todos = json
          this.loading = false
         })
  },
  methods:{
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id != id);
    },
    addTodo(todo){
      this.todos.push(todo);
    }
  }
}
</script>