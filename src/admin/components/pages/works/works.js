import { mapActions, mapState } from "vuex";
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;
export default {
  mixins: [simpleVueValidator.mixin],
  data() {
    return {
      tags: [],
      loading: false,
      editWork: false,
      renderedPhoto: "",
      work: {
        photo: '',
        techs: '',
        title: '',
        link: '',
        description: ''
      },
      newWork: { ...this.work }
    };
  },
  validators: {
    "newWork.title": function (value) {
      return Validator.value(value)
        .required("Введите Название");
    },
    "newWork.link": function (value) {
      return Validator.value(value)
        .required("Введите ссылку");
    },
    "newWork.description": function (value) {
      return Validator.value(value)
        .required("Введите Описание");
    },
    "newWork.techs": function (value) {
      return Validator.value(value)
        .required("Введите Тэги");
    },
    "renderedPhoto": function (value) {
      return Validator.value(value)
        .required("Введите фото");
    }

  },

  components: {
    workIteam: () => import("components/work-iteam/work-iteam.vue")
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    ...mapState('user', {
      userID: state => state.user.id
    }),
    renderedBackground() {
      return this.renderedPhoto ? `background-image: url(${this.renderedPhoto});` : '';
    }

  },
  methods: {
    ...mapActions("works", ["newAddWork", "fetchWork", "updateWork"]),

    ResetForm() {


      this.renderedPhoto = '';
      this.tags = [];
      this.editWork = false;

      this.work = {};
      this.work.title = '';
      this.work.link = '';
      this.work.description = '';
      this.work.techs = '';

      this.newWork = { ...this.work };

      this.validation.reset();


    },

    handleFile(e) {
      const file = e.target.files[0];
      this.newWork.photo = file;
      this.renderImageFile(file);
    },
    delTag(index) {
      this.tags.splice(index, 1);
      this.newWork.techs = this.tags.join(', ');
    },
    async newExengeAddWork(workThis) {
      if (await this.$validate()) {
        this.loading = true;
        try {
          const isChanged = Object.keys(this.newWork).some(key => {
            return this.newWork[key] !== this.work[key];
          });

          if (isChanged) {
            workThis.id ? await this.updateWork(workThis) : await this.newAddWork(workThis);
            this.editWork = false;
          }


        } catch (error) {

        } finally {
          //this.work = {};
          this.loading = false;
          
          this.renderedPhoto = '';
          this.tags = [];
          this.editWork = false;
    
          this.work = {};
          this.work.title = '';
          this.work.link = '';
          this.work.description = '';
          this.work.techs = '';
    
          this.newWork = { ...this.work };
    
          this.validation.reset();
        }
      }
    },

    renderImageFile(file) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        throw new Errow("Ошибка при чтении файла");
      }
    },
    editeExistedWork(work) {
      this.work = work;
      this.newWork = { ...this.work };
      this.editWork = true;
      if (this.work.photo) {
        this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.newWork.photo;
      }

    }
  },
  created() {
    this.fetchWork(this.userID);
    this.newWork = { ...this.work };

    if (this.work.photo) {
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.newWork.photo;
    }
    if (this.newWork.techs.length > 0) {
      this.tags = this.newWork.split(', ');
    }
  },
  watch: {
    work() {
      this.newWork = { ...this.work };
      if (this.newWork.photo) {
        this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.newWork.photo;
      }
    },
    'newWork.techs': function () {
      if (this.newWork.techs) {
        this.tags = this.newWork.techs.split(', ');
      }
    }
  }
};