
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import SimpleVueValidator from 'simple-vue-validator';
import '@babel/polyfill';

import router from './router';
import store from './store';
import $axios from './requests';

store.$axios = $axios;

const Validator = SimpleVueValidator.Validator;




Vue.use(VueRouter);
Vue.use(SimpleVueValidator);

new Vue({

  router,
  store,
  el: "#app-root",
  render: h => h(App)

});





/*
Works.exports = {
  data: function () {
    return {
      name: ''
    };
  },
  validators: {
    name: function (value) {
      return Validator.value(value).required('Введите Название работы'); 
    }
  },
  methods: {
    submit: function () {
      this.$validate()
        .then(function (success) {
          if (success) {
            alert('Validation succeeded!');
          }
        });
    }
  }
}

*/


console.log('work-admin');