
import Vue from "vue";
import '@babel/polyfill'
import $axios from './requests';

const btns = {
  template: "#work-btns",
  props: {
    works: {},
    currentIndex: Number
  },
};


const thumbs = {
  template: "#work-thumbs",
  props: {
    works: {},
    currentIndex: Number
  },
};

const tags = {
  template: "#work-tags",
  props: {
    works: {},
    currentIndex: Number,
    tags: {}
  },

};



const info = {
  template: "#work-info",
  components: { tags },
  props: {
    works: {},
    currentIndex: Number
  },






};


const display = {
  template: "#work-display",

  components: {
    thumbs, btns, info
  },

  props: {
    works: {},
    currentIndex: Number
  }

};


new Vue({

  data() {
    return {
      works: {},
      currentIndex: 0

    };
  },



  el: "#work-component",
  template: "#work-contener",

  components: {
    display
  }
  ,

  computed:
  {

  },

  methods: {



    makeInfiniteLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;

    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = requiredPic;

        return item;
      });
    },

    makeTagsList(data) {
      return data.map(item => {
          const tagsList  = item.techs.split(', ')
          item.techs = tagsList;       
        return item;
      });
    }

    ,


    handleSlide(direction) {


      var elem_next = document.querySelector('.slider-buttons__item--slide--next');
      var elem_prev = document.querySelector('.slider-buttons__item--slide--prev');

      const worksAmount = this.works.length - 1;
      switch (direction) {
        case "next":
          if (this.currentIndex < worksAmount) {

            this.currentIndex++;

          }
          break;
        case "prev":
          if (this.currentIndex > 0) {
            this.currentIndex--;
          }
          break;
      }

      if (this.currentIndex < worksAmount)
        elem_prev.disabled = false;
      else
        elem_prev.disabled = true;
      if (this.currentIndex > 0)
        elem_next.disabled = false;
      else
        elem_next.disabled = true;

    }



  },

  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForCurIndex(value);
    }
  },

  async created() {
    try {

      const { data } = await $axios.get("/works/252");
      this.works = this.makeArrWithRequiredImages(data);
      this.works = this.makeTagsList(data);


    }
    catch (error) {

    }

  }

});

