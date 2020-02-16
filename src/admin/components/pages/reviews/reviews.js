import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loading: false,
      editReviews: false,
      renderedPhoto: "",
      review: {
        photo: '',
        author: '',
        occ: '',
        text: ''
      },
      newReview: { ...this.review }
    };
  },
  components: {
    reviewIteam: () => import("components/review-iteam/review-iteam.vue")
  },
  computed: {
    ...mapState("review", {
      reviews: state => state.reviews
    }),
    renderedBackground() {
      return this.renderedPhoto ? `background-image: url(${this.renderedPhoto});` : '';
    }
  },

  methods: {
    ...mapActions("review", ["addReview", "fetchReview", "updateReview"]),
    handleFile(e) {
      const file = e.target.files[0];
      this.newReview.photo = file;
      this.renderImageFile(file);
    },
    ResetForm() {
      this.editReviews = false;
      this.review = {};
      this.renderedPhoto = '';
    },
    async newAddReviews(reviewThis) {
      this.loading = true;
      try {

        const isChanged = Object.keys(this.newReview).some(key => {
          return this.newReview[key] !== this.review[key];
        });




        if (isChanged) {
          reviewThis.id ? await this.updateReview(reviewThis) : await this.addReview(reviewThis);
          this.editReviews = false;
        }

        this.review = {};
        this.renderedPhoto = '';
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

    editReview(review) {
      this.review = review;
      this.editReviews = true;

    }

  },
  created() {
    this.fetchReview();
    this.newReview = { ...this.review };

    if (this.review.photo) {
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;
    }
  },
  watch: {
    review() {
      console.log(this.newReview);
      this.newReview = { ...this.review };
      console.log(this.newReview);
      if (this.review.photo) {
        this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;

      }
    }


  }
};
