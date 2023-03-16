const {
    createApp
} = Vue

createApp({
    data() {
        return {
            todos: [{
                    text: `comprare il pane`,
                    done: false,
                },
                {
                    text: `prendere appuntamento`,
                    done: false,
                },
                {
                    text: `ordinare torta compleanno`,
                    done: false,
                },
                {
                    text: `lavare la macchina`,
                    done: false,
                },
            ],

            newTodo: ``,
        }
    },

    methods: {
        deleteTask(index) {
            this.todos.splice(index, 1);
        },

        addTodo() {
            let newObject = {
                text: this.newTodo,
                done: false,
            };

            this.todos.push(newObject);
            this.newTodo = ``;
        },

        doneTask(key) {
            if (key.done == false) {
                key.done = true;
            } else {
                key.done = false;
            }
        }
    }

}).mount('#app')