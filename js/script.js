const {createApp} = Vue;

const app = createApp({
  data() {
    return {
      todo:[

        {title: 'Learn Vue', done: false},
        {title: 'Learn React', done: true},
        {title: 'Learn Angular', done: false},
        {title: 'Learn Angular', done: true},

      ],
      newTodo: '',
      error: '',
    }
  },
  methods: {

        addTodo() {

          if (this.newTodo.length >= 4) {
            this.todo.push({
            title: this.newTodo,
            done: false
          });
          }else {
            this.error= "Attenzione metti almeno una parola di 4 lettere!";
          }  
          
          
        },

        removeTask (index) {
          this.todo.splice(index, 1);
        },
      }
    }).mount('#app');
