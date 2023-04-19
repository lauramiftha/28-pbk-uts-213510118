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
