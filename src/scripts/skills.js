import Vue from "vue";


const skill = {
  template : "#skill",
  props:  ["skillName","skillPercent"],
  methods : {

       drawColoredCircle()
    {
    const circle = this.$refs["color-circle"];
    const dasArray = parseInt(
      getComputedStyle(circle).getPropertyValue("stroke-dasharray")
    );
    const percent = (dasArray / 100) * (100 - this.skillPercent);
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

created ()
{
  const data = require("../data/skills.json");
  this.skills = data;
}


});