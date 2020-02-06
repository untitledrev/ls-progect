<template lang="pug">
  main#main.main
    vc-header
    vc-nav
    router-view
    vc-login
</template>

<script>

import Login from './pages/login/login';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";


export default {
  components: {
    vcHeader: Header,
    vcNav: Nav,
    vcLogin: Login
  }
};
</script>



<style  lang="postcss">
.header__container {
  display: flex;
  color: #fff;
  font-size: 1rem;
  height: 80px;
  justify-content: center;
  align-items: center;
}
.logo-name {
  margin-right: 25px;
  font-size: 18px;
}

.name-panel {
  font-size: 14px;
}

.output {
}

.container {
  margin: 0 auto;
  max-width: 1140px;
  padding-left: 30px;
  padding-right: 30px;
}
.wrapper {
  background-color: #f6f9fe;
}
.nav {
  background-color: #fff;
}
.nav__list {
  display: flex;
}

.nav__item {
  font-size: 16px;

  &-list {
    padding: 26px;
    color: #414c63;
    border-bottom: 3px solid #fff;
    display: block;
    &.router-link-exact-active,
    &:hover {
      border-bottom: 3px solid #383bcf;
      & .nav__item-list {
        color: #383bcf;
      }
    }
  }
}

.title__container {
  padding-top: 62px;
  padding-bottom: 62px;
  display: flex;
}
.h2__title {
  font-size: 21px;
  color: #414c63;
  font-weight: bold;
}
.plashka__container {
  background-color: #fff;
  box-shadow: 1px 1px 8px #c5bfbf;
  padding: 20px;
}
.about__list {
  display: flex;
  margin-left: -30px;
}
.about__iteam {
  width: 50%;
  margin-left: 30px;
}

.input-block {
  width: 100%;
  max-width: 270px;
  border: none;
  padding: 10px;
  padding-left: 0px;
  padding-right: 0px;
  border-bottom: 1px solid;
}

.input__container {
  padding-bottom: 15px;
  border-bottom: 1px solid #dedee0;
  padding-left: 10px;
  display: flex;
}
.plashka-title__button {
  margin-left: auto;
}
.plashka__content {
  min-height: 230px;
  padding-left: 10px;
}
.input--new-skill {
  max-width: 220px;
}
.input--new-skill-procent {
  max-width: 75px;
}
.new-skill__container {
  display: flex;
  justify-content: flex-end;
}
.new-skill__button {
  margin-left: 30px;
}
.new-skill {
  margin-right: 10px;
}
.add-button__icon {
  margin: 0px;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
}
.add-button--big .add-button__icon {
  font-size: 30px;
}
.add-button--mini .add-button__icon {
  font-size: 16px;
}
.add-button {
  border: none;
  display: flex;
  background: linear-gradient(0.25turn, #1b5ce3 50%, #373bcf 90%, #443acc);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.add-button--big {
  width: 38px;
  height: 38px;
}
.add-button--mini {
  width: 20px;
  height: 20px;
}

.button--tick {
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%);
}
.button--cross {
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%);
}

.tags--cross {
  width: 11px;
  height: 11px;
  cursor: pointer;
  background: svg-load("cross.svg", fill=#414c63, width=100%, height=100%);
}

.button-edit--pencil {
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%);
}

.button-edit--trash {
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: svg-load("trash.svg", fill=#a0a5b1, width=100%, height=100%);
}

.block__button__icon--pencil {
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%);
}

.block__button__icon--cross {
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: svg-load("cross.svg", fill=#c92e2e, width=100%, height=100%);
}
.file__icon__svg {
  width: 100px;
  height: 100px;

  background: svg-load("user.svg", fill=#ffffff, width=100%, height=100%);
}
.skill__item:first-child {
  margin-top: 0px;
}
.skill__item {
  margin-top: 15px;
}
.skill__item__container {
  display: flex;
}
.skill__prosent {
  display: flex;
}
.prosent__title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-edit__list {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  align-items: center;
}
.button-edit__iteam:first-child {
  margin-right: 20px;
}
.skill__name {
  flex-grow: 1;
}
.skill__input {
  width: 100%;
}
.skills__container {
  padding-top: 15px;
}
.plashka__new-skill {
  margin-top: 30px;
}

.skill__prosent-input {
  padding-left: 10px;
  width: 60px;
}
.skill__button-edit {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-block__container {
  background-color: #fff;
  box-shadow: 0.0625rem 0.0625rem 0.5rem #c5bfbf;
  padding: 1.25rem;
  margin-bottom: 30px;
}
.edit-block {
  border-bottom: 1px solid #dedee0;
  font-size: 18px;
  font-weight: bold;
  color: #414c63;
  padding-left: 10px;
  padding-bottom: 25px;
}
.edit__container {
  margin-top: 50px;
  display: flex;
}
.load-file__block {
  width: 50%;
}
.form-add-work__block {
  width: 50%;
}
.load-file__container {
  margin-right: 30px;
}
.load-file__form {
  min-height: 270px;
  width: 100%;
  background: #dee4ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px dashed #a1a1a1;
}
.edit__container {
}
.load-file__input {
  display: none;
}
.button-click {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 30px;
  padding-left: 35px;
  padding-right: 35px;
  max-width: 180px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.load-file__title {
  color: rgba(65, 76, 99, 0.5);
  font-size: 1rem;
  max-width: 320px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 30px;
}
.input--form-add {
  max-width: none;
  color: #414c63;
  padding-bottom: 20px;
  padding-top: 20px;
}
.form-add__item {
  margin-bottom: 30px;
}
.form-label {
  color: rgba(65, 76, 99, 0.5);
}
.textarea-block {
  margin: 0px;
  width: 100%;
  min-height: 150px;
  border: 1px solid #d9dbe0;
  padding: 20px;
  margin-top: 20px;
  resize: none;
}
.tags__iteam {
  font-size: 13px;
  background: #f4f4f4;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 10px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.tags__iteam__icon {
  background-repeat: no-repeat;
  margin-left: 0.9375rem;
  border: none;

  cursor: pointer;
}
.block__button__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.block__button__icon {
  margin-left: 10px;
}
.tags__list {
  display: flex;
}
.button-no-click {
  color: #383bcf;
  border: none;
  background: none;
  font-size: 16px;
}
.form-add--button-no-click {
  margin-right: 70px;
}
.form-add__button {
  display: flex;
  justify-content: flex-end;
}
.works-list__container {
  display: flex;
}
.work-iteam {
  width: 32%;
  margin-left: 30px;
}
.works-list__container {
  margin-left: -30px;
}
.block-add-button__container {
  min-height: 540px;
  background: linear-gradient(90deg, #1b5ce3 50%, #373bcf 90%, #443acc);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.block-add-title {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  max-width: 100px;
  text-align: center;
  margin-top: 30px;
}
.block-add-button {
  height: 145px;
  width: 145px;
  border-radius: 50%;
  background: none;
  border: 1px solid #fff;
  font-size: 72px;
  color: #fff;
}
.block__content {
  padding: 30px;
  font-size: 16px;
}
.work-iteam__container {
  background-color: #fff;
  box-shadow: 0.0625rem 0.0625rem 0.5rem #c5bfbf;
  height: 100%;
}
.block__image-block {
  max-height: 185px;
  background: #eee;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.block__title {
  font-size: 18px;
  color: #414c63;
  font-weight: bold;
}
.block__text {
  line-height: 30px;
  color: rgba(65, 76, 99, 0.7);
  margin-top: 20px;
  height: 120px;
  overflow: hidden;
}
.block__link {
  margin-top: 35px;
}
.block__button {
  margin-top: 50px;
}
.block__button__list {
  display: flex;
}
.block__button__item {
  width: 50%;
  color: rgba(65, 76, 99, 0.5);
}
.block__link__text {
  color: #383bcf;
}
.block__button__item:last-child {
  justify-content: flex-end;
}
.block__tags {
  position: absolute;
  width: 100%;
  display: flex;
  bottom: 10px;
  justify-content: flex-end;
}
.tags--works {
  background: #fff;
  color: rgba(40, 51, 64, 0.7);
}
.reviews-edit__file {
  margin-right: 30px;
}
.file__icon {
  height: 200px;
  width: 200px;
  background: #dee4ed;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file__title {
  font-size: 16px;
  color: #383bcf;
  text-align: center;
  margin-top: 30px;
}
.reviews-input {
  flex-grow: 1;
  max-width: 615px;
}
.reviews--input {
  width: 50%;
}
.reviews-input__block {
  display: flex;
  margin-left: -30px;
}
.reviews--input {
  margin-left: 30px;
}
.reviews--textarea {
  min-height: 115px;
  resize: none;
}
.reviews-list__container {
  display: flex;
  margin-left: -30px;
}
.review-iteam {
  width: 32%;
  margin-left: 30px;
}
.block-add-button__container--reviews {
  min-height: 380px;
}
.block__user {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #dedee0;

  align-items: center;
}
.user__name {
  font-size: 18px;
  color: #414c63;
  font-weight: bold;
}
.user__pr {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.5);
  margin-top: 8px;
}
.user__avatar {
  height: 50px;
  width: 50px;
  background: #eee;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;
}
main {
  margin-bottom: 50px;
}
.add-gruppe {
  display: flex;
  background: none;
  color: #383bcf;
  font-size: 16px;
  margin-left: 60px;
}
.add-gruppe__title {
  margin-left: 15px;
}
.tags__contener {
  margin-top: 20px;
}
.logo-name__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.output__text--mobile {
  display: none;
}
.output__link {
  text-decoration: underline;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
.block__image__work-img {
}
.buttons-agree__list {
  display: flex;
  height: 100%;
  align-items: center;
}
.buttons-agree__container {
  height: 100%;
}
.button__iteam:first-child {
  margin-right: 20px;
}
/***********Tablet***************************/
@media screen and (max-width: 992px) {
  .edit__container--work {
    max-width: 500px;
    margin: 0 auto;
    display: block;
  }
  .form-add-work__block,
  .load-file__block {
    width: 100%;
  }
  .load-file__container {
    margin: 0 auto;
    margin-top: 30px;
  }
  .form-add-work__block {
    margin-top: 60px;
  }
  .form-add__button {
    justify-content: center;
  }
  .work-iteam {
    width: 50%;
  }
  .reviews-input__block {
    display: block;
  }
  .reviews--input {
    width: 65%;
  }
  .title__container {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

@media screen and (max-width: 768px) {
  .edit-block__container {
    margin-bottom: 10px;
  }

  .reviews-input__block {
    margin-left: 0px;
  }
  .reviews--input {
    width: 100%;
    margin-left: 0px;
  }
  .about__list {
    display: block;
    margin: 0px;
  }
  .about__iteam {
    width: auto;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .works-list__container {
    display: block;
    margin: 0px;
  }
  .reviews-list__container {
    display: block;
    margin: 0px;
  }
  .reviews-edit__block {
    display: block;
    max-width: 420px;
    margin: 0 auto;
  }

  .block-add-button__container {
    min-height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    flex-direction: row;
  }

  .block-add-button {
    height: 40px;
    width: 40px;

    font-size: 24px;
  }
  .block-add-title {
    margin-top: 0px;
    margin-left: 22px;
    max-width: none;
  }
  .block-add-button__container--reviews,
  .block-add-button__container {
    min-height: auto;
  }

  .work-iteam {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .work-iteam--button,
  .review-iteam--button {
   
  }
  .file__icon {
    margin: 0 auto;
        margin-top: 10px;
  }
  .reviews-input {
    margin-top: 50px;
  }
  .title__container {
    display: block;
  }
  .add-gruppe {
    margin-top: 30px;
    margin-left: 0px;
  }
  .name-panel {
    display: none;
  }
  .output__text--mobile {
    display: block;
  }
  .output--decstope {
    display: none;
  }
  .header__container {
    justify-content: flex-start;
  }
}

@media screen and (max-width: 400px) {
  .logo-name {
    margin-left: 10px;
  }
  .title__container {
    padding-left: 10px;
  }
  .container {
    padding: 0px;
  }
  .input__container {
    margin-left: -20px;
    margin-right: -20px;
  }
  .plashka-title__container .input-block {
  }
  .about__list {
  }
  .input-block--skill-block-name {
    margin-left: 30px;
  }
  .nav__item-list {
    padding: 20px;
  }
}
</style>

<style lang="postcss" src="./styles/main.pcss"></style>