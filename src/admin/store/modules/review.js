import showErrorTooltip from '@/helpers/showErrorTooltip.js';
export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIES: (state, data) => (state.reviews = data),
    ADD_REVIES: (state, review) => state.reviews.push(review),
    REMOVE_REVIES: (state, deletedReviews) => {
      state.reviews = state.reviews.filter(review => {
        return review.id != deletedReviews.id;
      });
    },
    UPDATE_REVIEW(state, updateReview) {
      state.reviews = state.reviews.map(review => {
        return review.id === updateReview.review.id ? updateReview.review : review;
      });

    },
  },
  actions: {
    async addReview({ commit }, review) {
      try {
        const formData = new FormData();

        Object.keys(review).forEach(key => {
          const value = review[key];
          formData.append(key, value);
        });

        const { data } = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIES", data);
        commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Отзыв успешно добавленна' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }

    },
    /* Получение всех отзывов */
    async fetchReview({ commit }) {
      try {
        const { data } = await this.$axios.get("/reviews/252");
        commit("SET_REVIES", data);

      }
      catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }

    },
    async removeReview({ commit }, review) {
      try {
        const { data } = await this.$axios.delete(`/reviews/${review.id}`);
        commit("REMOVE_REVIES", review);
        commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Отзыв успешно удален' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }

    },
    async updateReview({ commit }, review) {
      try {
        const formData = new FormData();

        Object.keys(review).forEach(key => {
          const value = review[key];
          formData.append(key, value);
        });
        const { data } = await this.$axios.post(`/reviews/${review.id}`, formData);

        commit('UPDATE_REVIEW', data);
        commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Отзыв успешно обовлен' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    }
  }
};
