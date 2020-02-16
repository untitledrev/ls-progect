export default {
  namespaced: true,
  state: {
    works: []
  },

  mutations: {
    SET_WORK: (state, data) => (state.works = data),
    ADD_WORK: (state, work) => state.works.push(work),
    REMOVE_WORK: (state, deletedWork) => {
      state.works = state.works.filter(work => {
        return work.id != deletedWork.id;
      });
    },
    UPDATE_WORK(state, updateWork) {
      state.works = state.works.map(work => {
        return work.id === updateWork.work.id ? updateWork.work : work;
      });

    }


  },
  actions: {
    async newAddWork({ commit }, work) {
      try {
        const formData = new FormData();

        Object.keys(work).forEach(key => {
          const value = work[key];
          formData.append(key, value);
        });

        console.log(work);

        const { data } = await this.$axios.post("/works", formData);
        commit("ADD_WORK", data);

      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }

    },
    async updateWork({ commit }, work) {
      try {
        const formData = new FormData();

        Object.keys(work).forEach(key => {
          const value = work[key];
          formData.append(key, value);
        });
        const { data } = await this.$axios.post(`/works/${work.id}`, formData);
        commit('UPDATE_WORK', data);

      } catch (error) {

      }
    },
    async fetchWork({ commit }) {
      try {
        const { data } = await this.$axios.get("/works/252");
        commit("SET_WORK", data);

      }
      catch (error) {

      }

    },
    async removeWork({ commit }, work) {
      try {
        const { data } = await this.$axios.delete(`/works/${work.id}`);
        commit("REMOVE_WORK", work);
      } catch (error) {

      }

    }
  }
};