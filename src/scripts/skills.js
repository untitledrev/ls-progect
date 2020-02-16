import Vue from "vue";
import '@babel/polyfill'
import $axios from './requests';

const skill = {
  template : "#skill",
  props:  {
    skill: Object
  },
  methods : {

       drawColoredCircle()
    {
    const circle = this.$refs["color-circle"];
    const dasArray = parseInt(
      getComputedStyle(circle).getPropertyValue("stroke-dasharray")
    );
    const percent = (dasArray / 100) * (100 - this.skill.percent);
    circle.style.strokeDashoffset = percent;  
    }  
  },
  mounted() 
  {
      this.drawColoredCircle();
  }
};


const skillsRow = {
  template : "#skills-row",
  components : {
    skill
  },
  props: {
    skill: Object
  }
};


new Vue({

data (){
  return {
  skills  : []
  };
},

el: "#skills-component",
template : "#skills-list" ,
components : {
  skillsRow
},

async created ()
{
  try {
    const { data } = await $axios.get("/categories/252");
    this.skills = data;
  }
  catch (error) {

  }

}


});