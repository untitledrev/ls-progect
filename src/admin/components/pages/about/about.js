import { mapActions, mapState } from "vuex";

export default {
  data() {
    return { 
      title: "",
      newcatagory:false
    };
  },
  components: {
    skillGroup: () => import("components/skill-group/skill-group.vue")
  }, 
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
        this.newcatagory = false;
        this.title = "";
      } catch (error) {
        console.log(error.message);    
      }

      //console.log(this.title);
    }

  }
}