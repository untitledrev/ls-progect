
import Vue from "vue";

const btns = {
  template : "#work-btns",

};


const thumbs = {
  template : "#work-thumbs",
  props: ['works' , "currentWork"]
};

const tags = {
  template : "#work-tags",
  props: ['tags']
};



const info = {
  template : "#work-info",
  components:{tags},
  props : ['currentWork'],

  computed:
  {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
  }
};


const display = {
  template : "#work-display",

  components:{
    thumbs , btns , info
  },

  props: ['works' , 'currentWork' , 'currentIndex'] ,
 


};


new Vue ({

  data (){
    return {
      works  : [],
      currentIndex : 0
    };
  }, 



el: "#work-component",
template : "#work-contener",

components:{
  display
}
,

computed :
{
  currentWork()
  {
    return this.works[this.currentIndex]
  }
},

methods:  {




  makeInfiniteLoopForCurIndex(value) {
    const worksAmount = this.works.length - 1;
    if (value > worksAmount) this.currentIndex = 0;
    if (value < 0) this.currentIndex = worksAmount;
  },
  makeArrWithRequiredImages(data) {
    return data.map(item => {
      const requiredPic = require(`../images/content/${item.photo}`);
      item.photo = requiredPic;

      return item;
    });
  }

,


    handleSlide(direction) {
     
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
   


},

watch: {
  currentIndex(value) {
    this.makeInfiniteLoopForCurIndex(value);
  }
},

  created ()
  {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);

  }
});

