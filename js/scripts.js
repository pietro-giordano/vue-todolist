const { createApp } = Vue;

createApp({

      data() {

            return {    
                  toDoList: [
                        {
                              text: 'Corsa mattutina',
                              done: true
                        }, {
                              text: 'Spesa al supermercato',
                              done: true
                        }, {
                              text: 'Lavare pavimento',
                              done: false
                        }, {
                              text: 'Palestra',
                              done: false
                        },
                  ],
            };

      },

      methods: {
            


      },

}).mount('#app');