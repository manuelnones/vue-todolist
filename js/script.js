const { createApp } = Vue

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
    }
  }).mount('#app')