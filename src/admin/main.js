import Vue from 'vue';
import App from './App.vue';
import SimpleVueValidator from 'simple-vue-validator';
const Validator = SimpleVueValidator.Validator;

new Vue({
  mixins: [SimpleVueValidator.mixin],
  el: "#app-root",
  render: h => h(App)
});