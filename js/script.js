const {
    createApp
} = Vue

createApp({
    data() {
        return {
            todos: [
                {
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
            ]
        }
    },

    methods: {
        doneTask(index) {
            this.todos.slice(index, 1)
            console.log(`cliccato`)
        }
    }

}).mount('#app')