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
                              text: 'Allenarsi in palestra',
                              done: false
                        },
                  ],
                  newTask: {
                        text: '',
                        done: false
                  }
            };

      },

      methods: {
            
            eraseTask(index) {

                  this.toDoList.splice(index, 1);
                  console.log(this.toDoList);

            },

            createTask() {

                  this.toDoList.push(this.newTask);
                  console.log(this.toDoList);
                  this.newTask = '';
                  
            }

      },

}).mount('#app');