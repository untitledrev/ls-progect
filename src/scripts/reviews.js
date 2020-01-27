import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);



const reviewsrow = {
  template: "#reviews-row",
  props: {
    review: Object
  }
};





new Vue({

  data() {
    return {
      reviews: []
    };
  },

  el: "#reviews-component",
  template: "#review-contener",

  components: {
    reviewsrow
  },

  methods: {

    handleSlideClick (dataset)  {
      console.log(dataset.index )
    },
    handleSlide(direction) {
     
      switch (direction) {
        case "next":
          VueCarousel.page-change
          console.log('next');
          break;
        case "prev":
          console.log('prev');        
          break;
      }
    },


    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.avatar}`);
        item.avatar = requiredPic;
  
        return item;
      });
    }
  },


  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }



});


