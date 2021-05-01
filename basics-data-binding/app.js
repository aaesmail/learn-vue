const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and Master Vue!",
      courseGoalB: "Master Vue and Build Amazing Apps!",
      vueLink: "https://vuejs.org/",
    };
  },

  methods: {
    outputGoal() {
      return Math.random() < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
