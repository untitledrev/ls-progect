<template lang="pug" src="./skill-group.pug"></template>
<script>

import { mapActions } from "vuex";
export default {
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
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category);  
      } catch (error) {
        
      }
    },
    async editExistedCategory() {
      try {
        await this.editCategory(this.category);
        this.editmode = false;
      } catch (error) {
      }
    }    
  }
};
</script>