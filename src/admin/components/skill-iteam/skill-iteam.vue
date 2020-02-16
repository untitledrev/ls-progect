<template lang="pug" src="./skill-iteam.pug"></template>
<script>
import { mapActions } from "vuex";
import simpleVueValidator from "simple-vue-validator";

const { Validator } = simpleVueValidator;

export default {
  mixins: [simpleVueValidator.mixin],
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill }
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  validators: {
    "editedSkill.title" : function(value) {
      return Validator.value(value)
        .required("Введите Название")
        .minLength(2, "В поле должно быть больше 2-x символов");
    }
  ,
    "editedSkill.percent": function(value) {
      return Validator.value(value)
        .required("Введите Процент")
        .greaterThanOrEqualTo(1, "Должен быть хоты бы 1 процент")
        .lessThanOrEqualTo(100, "Должен быть  Не больше 100 процентов");
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      if (await this.$validate()) {
        try {
          await this.removeSkill(this.skill);
        } catch (error) {}
      }
    },
    async editExistedSkill() {
      if (await this.$validate()) {
        try {
          await this.editSkill(this.editedSkill);
          this.editmode = false;
        } catch (error) {}
      }
    }
  }
};
</script>
