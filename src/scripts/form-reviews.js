import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import $axios from 'axios';
import { mapActions } from 'vuex';
import '@babel/polyfill';

const Validator = SimpleVueValidation.Validator;
const required = '';
new Vue({
  mixins: [SimpleVueValidation.mixin],
  data: () => ({
    massega: {
      name: '',
      email: '',
      text: ''
    }
  }),
  el: "#form-review-component",
  template: "#form-review",

  validators: {
    'massega.name': function (value) {
      return Validator.value(value).required('Введите Ваше имя').minLength(6, 'В поле должно быть больше 6-ти символов');
    },
    'massega.email': function (value) {
      return Validator.value(value).required('Введите Ваше e-mail').email('В поле должно быть email');
    },
    'massega.text': function (value) {
      return Validator.value(value).required('Введите Сообщение').minLength(20, 'В поле должно быть больше 20-ти символов').maxLength(180, 'В поле должно быть меньше 180-ти символов');
    }
  },
  methods: {
    ...mapActions('tooltip', ['showTooltip']),     
    async formMessage() {

      if (await this.$validate()) {
        try {
        //const response = await $axios.post("https://iiivash.ru/mail.php", this.massega);
      
        
        }  catch ({ message }) {
          this.showTooltip({ message, type: 'error' });
        }finally {
          //this.showTooltip({  type: 'success' });
          console.log(this.massega);
          this.massega.name = '';
          this.massega.email = '';
          this.massega.text = '';
          this.validation.reset();
        }
      }
    }
  }

});


