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

    }
  },
  methods: {
    
  }
}).mount('#app')