import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    generatedNum: null,
    color: "green",
    action: "",
    status: "",
  },
  mutations: {
    increaseCounter(state, number) {
      state.counter += number;
      state.action = "ADDED";
      state.generatedNum = number;
      state.status = "";
    },
    decreaseCounter(state, number) {
      state.counter -= number;
      state.action = "SUBTRACTED";
      state.generatedNum = number;
      state.status = "";
    },
    setColor(state, newColor) {
      state.color = newColor;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      this.state.status = "loading";
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
      )
        .then((response) => {
          commit("increaseCounter", response.data);
        })
        .catch((err) => {
          this.state.status = "error";
          console.log(err);
        });
    },
    decreaseCounter({ commit }) {
      this.state.status = "loading";
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
      )
        .then((response) => {
          commit("decreaseCounter", response.data);
        })
        .catch((err) => {
          this.state.status = "error";
          console.log(err);
        });
    },
    setColor({ commit }, newColor) {
      commit("setColor", newColor);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
