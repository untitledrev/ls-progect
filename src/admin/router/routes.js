
import Header from "components/header/header.vue";
import Nav from "components/nav/nav.vue";

export default [
  {
    path: "/",
    components:
    {
      default: () => import('components/pages/about/about.vue'),
      tabs: Nav,
      header: Header
    },
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    components:
    {
      default: () => import('components/pages/works/works.vue'),
      tabs: Nav,
      header: Header
    },

    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    components:
    {
      default: () => import('components/pages/reviews/reviews.vue'),
      tabs: Nav,
      header: Header
    },
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    components:
    {
      default: () => import('components/pages/loginadmin/loginadmin.vue'),

    },
    meta: {
      public: true
    }
  }
];