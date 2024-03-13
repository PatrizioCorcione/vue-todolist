const {createApp} = Vue;

const app = createApp({
  data() {
    return {
      todo:[

        {title: 'Ripassare CSS', done: false},
        {title: 'Coprare la Pappa a Eden', done: true},
        {title: 'Insultare Alex Sibiriu', done: false},
        

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
              done: false,
            });
            this.newTodo = '';
          } else {
            this.error = "Attenzione metti almeno una parola di 4 lettere!";
          }  
          
          
        },

        removeTask (index) {
          if (this.todo[index].done == true) {
            this.todo.splice(index, 1);
          }else {
            this.error= "Attenzione non puoi eliminare un task non completata!";
          }
          
        },
      }
    }).mount('#app');
