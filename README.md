<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app" class="container">
    <h1>Daftar Kegiatan</h1>
    <form id="todo-form" @submit.prevent="addTodo">
      <input type="text" id="todo-input" placeholder="Tambahkan kegiatan baru" v-model="newTodo">
      <button type="submit" id="todo-submit">Tambah Kegiatan</button>
    </form>
    <ul id="todo-list">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" :checked="todo.done" @change="toggleDone(index)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="deleteTodo(index)">Hapus</button>
      </li>
    </ul>
  </div>

  <!-- library Vue JS -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

  <!-- file JavaScript aplikasi Vue JS -->
  <script src="app.js"></script>
</body>
</html>

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo: function() {
      if(this.newTodo.trim() != '') {
        this.todos.push({
          text: this.newTodo,
          done: false
        });
        this.newTodo = '';
      }
    },
    toggleDone: function(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
});
