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



    }
  },
  methods: {
        addTodo() {
          this.todo.push({
            title: this.newTodo,
            done: false
          });
        }
      }
    }).mount('#app');
