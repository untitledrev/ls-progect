import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "./modules/categories";
import skills from "./modules/skills";
import user from "./modules/user";
import review from "./modules/review";
import works from "./modules/works";

export default new Vuex.Store({
  modules: {
    categories,
    skills,
    user,
    review,
    works
  }
});