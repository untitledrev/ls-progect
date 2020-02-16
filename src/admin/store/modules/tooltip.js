export default {
  namespaced: true,
  state: {
    tooltip: {
      show: false,
      message: 'Сообщение успешно отправленно',
      status: 'success'
    },
    showed: false,
    message: 'Сообщение успешно отправленно',
    type: 'success'
  },
  mutations: {
    SET_VISIBILITY (state, message) {
      state.showed = message;
    },
    SET_MESSAGE (state, message) {
      state.message = message;
    },
    SET_TYPE (state, message) {
      state.type = message;
    },
    SHOW_TOOLTIP (state, { type, message }) {
      state.showed = true;
      state.message = message;
      state.type = type;
    }
  },
  actions: {
    showTooltip (context, message) {
      const availableTypeOptions = ["success", "warning", "error"];

      if (availableTypeOptions.includes(message.type) === false) {
        console.warn("Передан не допустимый тип для тултипов");
      }

      context.commit("SET_VISIBILITY", true);
      context.commit("SET_TYPE", message.type);
      context.commit("SET_MESSAGE", message.message);
    },
    visibility (context, message) {
      context.commit('VISIBILITY');
    },
    closeTooltip (context, message) {
      context.commit("SET_VISIBILITY", false);
    }
  },
  getters: {}
};