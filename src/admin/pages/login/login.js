import SimpleVueValidation  from 'simple-vue-validator';

const Validator = SimpleVueValidation.Validator;
const required = '';

export default {
    mixins: [SimpleVueValidation.mixin],
    data: () => ({
     
        name:  '',
        password: ''
  
    }),

    validators: {
      name : function (value) {
        return Validator.value(value).required('Введите Ваше имя').minLength(6,'В поле должно быть больше 6-ти символов'); 
      },
      password : function (value) {
        return Validator.value(value).required('Введите Ваше пароль').minLength(6,'В поле должно быть больше 6-ти символов'); 
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
};

