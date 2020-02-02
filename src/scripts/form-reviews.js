import Vue from 'vue';
import SimpleVueValidation  from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
const required = '';
new Vue({
  mixins: [SimpleVueValidation.mixin],
  data: () => ({
  name:  '',
  email: '',
  text:  ''
  }),
  el: "#form-review-component",
  template : "#form-review",

  validators: {
    name : function (value) {
      return Validator.value(value).required('Введите Ваше имя').minLength(6,'В поле должно быть больше 6-ти символов'); 
    },
    email : function (value) {
      return Validator.value(value).required('Введите Ваше e-mail').email('В поле должно быть email'); 
    } , 
    text : function (value) {
      return Validator.value(value).required('Введите Сообщение').minLength(20,'В поле должно быть больше 20-ти символов').maxLength(180,'В поле должно быть меньше 180-ти символов'); 
    }     
  },
  methods: {
    submitForm: function () {
      this.$validate()
        .then(function (success) {          
          if (success) {
            
            let formData = new FormData(document.forms.review);
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "*");
            xhr.send(formData);     
            console.log(formData);     
            xhr.onload = () =>  console.log(xhr.response);

          
          }
        });
    }
  }

});


