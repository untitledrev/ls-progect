
import Vue from "vue";

const btns = {
  template : "#work-btns",
  props: ['works' , 'currentWork' , 'currentIndex'] ,
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
  /*
    if (value > worksAmount) this.currentIndex = 0;
    if (value < 0) this.currentIndex = worksAmount;
    */
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

     
      var  elem_next = document.querySelector('.slider-buttons__item--slide--next');      
      var  elem_prev = document.querySelector('.slider-buttons__item--slide--prev');
                
      const worksAmount = this.works.length - 1;   
      switch (direction) {
          case "next":
          if (this.currentIndex < worksAmount) 
          {

            this.currentIndex++;

          }         
          break;
          case "prev":
          if (this.currentIndex > 0) 
          {
          this.currentIndex--;
          }        
          break;
      }

      if (this.currentIndex < worksAmount) 
      elem_prev.disabled=false;
       else
      elem_prev.disabled=true;  
      if (this.currentIndex > 0) 
      elem_next.disabled=false;
       else
       elem_next.disabled=true;  

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

