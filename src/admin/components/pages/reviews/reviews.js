import { mapActions, mapState } from "vuex";
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;
export default {
  mixins: [simpleVueValidator.mixin],
  data() {
    return {
      loading: false,
      editReviews: false,
      renderedPhoto: "",
      sizePhoto: "",
      review: {
        photo: '',
        author: '',
        occ: '',
        text: ''
      },
      newReview: { ...this.review }
    };
  },

  validators: {
    "newReview.author": function (value) {
      return Validator.value(value)
        .required("Введите имя автора");
    },
    "newReview.occ": function (value) {
      return Validator.value(value)
        .required("Введите титул автора");
    },
    "newReview.text": function (value) {
      return Validator.value(value)
        .required("Введите текст отзыва");
    },
    "renderedPhoto": function (value) {
      return Validator.value(value)
        .required("Загрузите аватар");
    }

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
    ResetFormReview() {
      this.editReviews = false;
      this.review = {};
      this.review.author = '';
      this.review.occ = '';
      this.review.text = '';

      this.newReview = { ...this.review };

      this.renderedPhoto = '';
      this.validation.reset();
    },

    handleFile(e) {
      const file = e.target.files[0];
      this.newReview.photo = file;
      this.renderImageFile(file);
    },
    async newAddReviews(reviewThis) {
      if (await this.$validate()) {
        this.loading = true;
        try {

          const isChanged = Object.keys(this.newReview).some(key => {
            return this.newReview[key] !== this.review[key];
          });




          if (isChanged) {
            reviewThis.id ? await this.updateReview(reviewThis) : await this.addReview(reviewThis);
          }


        } catch (error) {

        } finally {
          this.loading = false;

          this.editReviews = false;

          this.newReview.author = '';
          this.newReview.occ = '';
          this.newReview.text = '';
          this.renderedPhoto = '';

          this.validation.reset();

        }
      }
    },
    renderImageFile(file) {
      const reader = new FileReader();
      try {
        console.log(file);

        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.renderedPhoto = reader.result;
          this.sizePhoto = file.size;

        };
      } catch (error) {
        throw new Errow("Ошибка при чтении файла");
      }
    },

    editReview(review) {
      this.review = review;
      this.newReview = { ...this.review };
      this.editReviews = true;
      if (this.review.photo) {
        this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;
      }
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
      this.newReview = { ...this.review };

      if (this.review.photo) {
        this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;

      }
    }


  }
};
