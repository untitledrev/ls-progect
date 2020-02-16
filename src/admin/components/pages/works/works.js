import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tags: [],
      loading: false,
      editWork: false,
      renderedPhoto: "",
      work: {
        photo: '',
        techs: '',
        title: '',
        link: '',
        description: ''
      },
      newWork: { ...this.work }
    };
  },
  components: {
    workIteam: () => import("components/work-iteam/work-iteam.vue")
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    renderedBackground() {
      return this.renderedPhoto ? `background-image: url(${this.renderedPhoto});` : '';
    }

  },
  methods: {
    ...mapActions("works", ["newAddWork", "fetchWork", "updateWork"]),
  
    handleFile(e) {
      const file = e.target.files[0];
      this.newWork.photo = file;
      this.renderImageFile(file);
    },
    delTag(index) {
      this.tags.splice(index, 1);
      this.newWork.techs = this.tags.join(', ');
    },
    async newExengeAddWork(workThis) {

      this.loading = true;
      try {
        const isChanged = Object.keys(this.newWork).some(key => {
          return this.newWork[key] !== this.work[key];
        });

        if (isChanged) {
          workThis.id ? await this.updateWork(workThis) : await this.newAddWork(workThis);
          this.editWork = false;
        }

        this.work = {};
        this.renderedPhoto = '';
        this.tags = [];

      } catch (error) {

      } finally {
        this.loading = false;
      }

    },

    renderImageFile(file) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        throw new Errow("Ошибка при чтении файла");
      }
    },
    editeExistedWork(work) {
      this.work = work;
      this.editWork = true;


    }
  },
  created() {
    this.fetchWork();
    this.newWork = { ...this.work };

    if (this.work.photo) {
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.newWork.photo;
    }
    if (this.newWork.techs.length > 0) {
      this.tags = this.newWork.split(', ');
    }
  },
  watch: {
    work() {
      this.newWork = { ...this.work };
      if (this.newWork.photo) {
        this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.newWork.photo;
      }
    },
    'newWork.techs': function () {
      console.log('newWork');
      if (this.newWork.techs) {
        this.tags = this.newWork.techs.split(', ');
      }
    }
  }
};