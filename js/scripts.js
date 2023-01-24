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
            
            eraseTask(index) {

                  this.toDoList.splice(index, 1);
                  console.log(this.toDoList);

            }

      },

}).mount('#app');