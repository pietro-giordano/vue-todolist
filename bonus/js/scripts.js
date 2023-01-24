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

                  if(this.newTask.text != '') {
                        
                        this.toDoList.push({...this.newTask});
                        console.log(this.toDoList);
                        this.newTask.text = '';

                  }
                  
            },

            invertDone(index) {

                  if(this.toDoList[index].done == true) {

                        this.toDoList[index].done = false;

                  } else {

                        this.toDoList[index].done = true;

                  }

            }

      },

}).mount('#app');