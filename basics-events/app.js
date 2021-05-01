const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullName: "",
      confirmedName: "",
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   console.log("Running Again...");
    //   this.fullName = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   console.log("Running Again...");
    //   this.fullName = this.name + " " + value;
    // },
  },

  computed: {
    fullName() {
      console.log("Running Again...");
      return this.name === "" ? "" : this.name + " " + this.lastName;
    },
  },

  methods: {
    outputFullName() {
      console.log("Running Again...");
      return this.name === "" ? "" : this.name + " adask";
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    onAdd(num) {
      this.counter = this.counter + num;
    },
    onReduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
