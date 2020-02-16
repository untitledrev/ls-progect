<template lang="pug" src="./work-iteam.pug"></template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
   return {
        tags: [],
      }
  },
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true
    }
  },

  computed: {
    reviewPhoto() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`;
    }
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    editWork() {
      this.$emit("editeExistedWork", this.work);
    },
    async removeExistedWork() {
      try {         
        await this.removeWork(this.work);
      } catch (error) {}
    }
  },

 created() {
      if (this.work.techs.length > 0) {
        this.tags =  this.work.techs.split(',');
  }
 },
watch: {
   'work.techs' :  function () {    
      if (this.work.techs.length > 0) {    
      this.tags = this.work.techs.split(',');
    }
    }
}
};
</script>