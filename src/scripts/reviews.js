import Vue from "vue";
import '@babel/polyfill'
import $axios from './requests';
import { Carousel, Slide } from 'vue-carousel';


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
    reviewsrow,
    Carousel,
    Slide
  },
  methods: {
    handleSlideClick(dataset) {
      console.log(dataset.index)
    },
    handleSlide(direction) {
      var elem_n = document.querySelector('.VueCarousel-navigation-next');
      var elem_next = document.querySelector('.reviews-buttons__item--review--next');
      var elem_p = document.querySelector('.VueCarousel-navigation-prev');
      var elem_prev = document.querySelector('.reviews-buttons__item--review--prev');

      switch (direction) {
        case "prev":
          elem_p.click();
          break;
        case "next":
          elem_n.click();
          break;
      }

      if (elem_n.getAttribute("class").indexOf("VueCarousel-navigation--disabled") == 58) {
        elem_next.classList.remove('active');
        elem_next.disabled = true;
        // console.log('12');
      }
      else {
        elem_next.classList.add('active');
        elem_next.disabled = false;
      }

      if (elem_p.getAttribute("class").indexOf("VueCarousel-navigation--disabled") == 58) {
        elem_prev.classList.remove('active');
        elem_prev.disabled = true;
        // console.log('21');
      }
      else {
        elem_prev.classList.add('active');
        elem_prev.disabled = false;
      }
    },

    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = requiredPic;
        return item;
      });
    }
  },

  /*
    created() {
      const data = require("../data/reviews.json");
      this.reviews = this.makeArrWithRequiredImages(data);
    }
  */
  async created() {
    try {
      const { data } = await $axios.get("/reviews/252");
      this.reviews = this.makeArrWithRequiredImages(data);
    }
    catch (error) {

    }

  }



});


