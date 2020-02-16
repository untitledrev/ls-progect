import { mapActions, mapState } from "vuex";
import simpleVueValidator from 'simple-vue-validator';

const { Validator } = simpleVueValidator;


export default {
  mixins: [simpleVueValidator.mixin],
  data() {
    return {
      title: "",
      newcatagory: false
    };
  },
  validators: {

    'title': function (value) {
      return Validator.value(value).required('Введите Название').minLength(6, 'В поле должно быть больше 6-ти символов');
    }
  },
  components: {
    skillGroup: () => import("components/skill-group/skill-group.vue")
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      if (await this.$validate()) {
      try {
        await this.addCategory(this.title);
        this.newcatagory = false;
        this.title = "";
      } catch (error) {
        console.log(error.message);
      }

      //console.log(this.title);
    }
    }

  }
}