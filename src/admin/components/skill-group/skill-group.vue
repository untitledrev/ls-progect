<template lang="pug" src="./skill-group.pug"></template>
<script>
import { mapActions } from "vuex";
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
  mixins: [simpleVueValidator.mixin],
  components: {
    skillIteam: () => import("components/skill-iteam/skill-iteam.vue")
  },
  data() {
    return {
      editmode: false,
      loading: false,
      skill: {
        title: "",
        percent: "",
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  validators: {
    "skill.title": function(value) {
      return Validator.value(value)
        .required("Введите Название")
        .minLength(2, "В поле должно быть больше 2-x символов");
    },
    "skill.percent": function(value) {
      return Validator.value(value)
        .required("Введите Процент")
        .greaterThanOrEqualTo(1, "Должен быть хоты бы 1 процент")
        .lessThanOrEqualTo(100, "Должен быть  Не больше 100 процентов");
    }
  },

  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    async addNewSkill() {
      if (await this.$validate()) {
        this.loading = true;
        try {
          await this.addSkill(this.skill);
          this.skill.title = "";
          this.skill.percent = "";
        } catch (error) {
        } finally {
          this.loading = false;
        }
      }
    },
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category);
      } catch (error) {}
    },
    async editExistedCategory() {
      try {
        await this.editCategory(this.category);
        this.editmode = false;
      } catch (error) {}
    }
  }
};
</script>