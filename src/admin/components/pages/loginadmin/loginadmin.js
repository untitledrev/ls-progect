import simpleVueValidator from 'simple-vue-validator';
import $axios from '@/requests';

import { mapActions} from 'vuex';
const { Validator } = simpleVueValidator;

export default {
  mixins: [simpleVueValidator.mixin],
  data: () => ({
    user: {
      name: '',
      password: ''
    },
    error: ''
  }),

  validators: {

    'user.name': function (value) {
      return Validator.value(value).required('Введите Ваше имя').minLength(6, 'В поле должно быть больше 6-ти символов');
    },
    'user.password': function (value) {
      return Validator.value(value).required('Введите Ваше пароль').minLength(6, 'В поле должно быть больше 6-ти символов');
    }
  },
  methods: {
    async login() { 
      if (await this.$validate()) {
        try {
          const response = await $axios.post("/login", this.user);
          const token = response.data.token;
          localStorage.setItem("token",token);
          $axios.defaults.headers['Authorization'] =  `Bearer ${token}`;
          this.$router.replace("/");
          console.log(response);
        }
        catch (error) {

        }
      }
      /*
      this.$validate()
        .then(function (success) {
          if (success) {
            let formData = new FormData(document.forms.login);

            axios.post(baseUrl + '/login', {
              name: formData.get('name'),
              password: formData.get('password')
            }).then(response => {
              const token = response.data.token;
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              localStorage.setItem('token', token);
              //console.log(response.data);
            }).catch(error => {

              //console.log(error.response.data);
            });
          }
        });
        */

    }
  }
};

