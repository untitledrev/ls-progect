
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import SimpleVueValidator from 'simple-vue-validator';
import About from './pages/about/about';
import Works from './pages/works/works';
import Reviews from './pages/reviews/reviews';


const Validator = SimpleVueValidator.Validator;


const router = new VueRouter({
  routes: [
    { path: '/', component: About },
    { path: '/works', component: Works },
    { path: '/reviews', component: Reviews }
  ]
});

Vue.use(VueRouter);
Vue.use(SimpleVueValidator);

new Vue({

  router,
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