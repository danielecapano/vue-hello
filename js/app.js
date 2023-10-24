const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Ciao, sono un messaggio Vue",
      imgSrc: "https://picsum.photos/200/300",
    };
  },
  methods: {
    onClick() {
      console.log("Mi hai cliccato");
      this.message = "Hai cambiato testo";
    },
  },
}).mount("#app");
