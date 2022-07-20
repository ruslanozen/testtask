import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    universities: {},
  },
  getters: {
    universities(state) {
      return state.universities;
    },
  },
  mutations: {
    setUniversities(state, universities) {
      state.universities = universities;
    },
  },
  actions: {
    // async fetchUniversities(context, { value }) {
    //   return await fetch(
    //     `http://universities.hipolabs.com/search?country=${value}`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       context.commit("setUniversities", data);
    //       console.log(data);
    //     })
    //     .catch((err) => console.log(err));
    // },
    async fetchUniversities(context, { value }) {
      const result = await axios.get(
        `http://universities.hipolabs.com/search?country=${value}`
      );
      context.commit("setUniversities", result.data);
    },
  },
  modules: {},
});
