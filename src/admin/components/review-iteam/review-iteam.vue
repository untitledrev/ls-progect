<template lang="pug" src="./review-iteam.pug"></template>
<script>
import { mapActions } from "vuex";
export default {

  props: {
    review: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {
    reviewPhoto() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`;
    }
  },
  methods: {
    ...mapActions("review", ["removeReview"]),
    editReview() {
      this.$emit('editReview', this.review);  
      
    },   
    async removeExistedReview() {
      try {
        await this.removeReview(this.review);    
      } catch (error) {
        
      }
    }
  }
};
</script>