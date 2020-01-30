<style  lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";

html {
}
body,
html {
  height: 100%;
}

input,
textarea {
  outline: none;
}

body {
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;
}

.row {
  display: flex;
}

.fullscreen-section {
  height: 100vh;
  min-height: 650px;
}

button {
  border: 0;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

textarea {
  background: none;
  border: none;
}

header {
  background: linear-gradient(0deg, #3e3e59 50%, #414165 90%, #454572);
}

.output {
  margin-left: auto;
}

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
  max-width: 1080px;
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
  padding: 26px;
  font-size: 16px;
  border-bottom: 3px solid #fff;
  &-list {
    color: #414c63;
  }
  &.active ,  &:hover {
    border-bottom: 3px solid #383bcf;
    & .nav__item-list {
    color: #383bcf;
  }

  }
}
</style>
<template lang="pug">
  main#main.main
    - 
      var skills__list =  [
          {
            'name' : ''
          },
          {
            'name' : 'Front-end',
              'skills' : [
                {'name': 'HTML5','prosent' : '10'},
                {'name': 'CSS3','prosent' : '85'},
                {'name': 'Javascript','prosent' : '75'},      
                {'name': 'Jquery','prosent' : '45'}    
              ]
            }
        ]
    header.header
      .container.header__container
        .logo-name
          .logo-name__container
            .logo-name__avatar
            .logo-name__title  Владимир Астаханов
        .name-panel
          .name-panel__container
            .name-panel__text Панель администрирования
        .output
          .output__container
            .output__text 
              a(href="#auto") Выйти
    nav.nav#nav
      .container.nav__container
        - var menys = ['Обо мне','Работы','Отзывы']
        ul.nav__list
          each meny, index in menys
            if index == 0
              - var active = 'active'
            else
              - var active = ''  
            li(class=`${active}`).nav__item
              a(href="#").nav__item-list #{meny}
    section.about#about
      .about__container.container
        .title__container
          h2.h2__title Блок «Обо мне»
          button.add-gruppe
            .add-button
              .add-button__icon.add-button--mini
            .add-gruppe__title Добавить группу
        .about__block-plashka
          .about__list
            each skill in skills__list 
              .about__iteam
                .plashka__container.plashka__container--new
                  .plashka-title__container
                    .input__container
                      if skill.name != ''
                        input(placeholder="Название новой группы").input-block
                      else
                        input(placeholder="Название новой группы" value=`${skill.name}`).input-block
                    .plashka-title__button
                      .buttons-agree__container
                        .buttons-agree__list
                        -var buttons = ['good' , 'close']
                          each button in buttons                  
                            .button__iteam
                              .button__container
                                button(class=`button--${button}`).button-agree
                    .plashka__content
                       if skill.name != ''
                        .skills__container
                          .skills__list
                            each one_skill in skill.skills 
                              .skill__item
                                .skill__item__container
                                  .skill__name #{one_skill.name}
                                  .skill__prosent #{one_skill.prosent}
                                  .skill__button-edit
                                    - var button_edit = ['edit' , 'remove']
                                      .button-edit__list
                                        each button in button_edit
                                          .button-edit__iteam
                                            button(class="button-edit--${button}").button-edit


                    .plashka__new-skill
                      .new-skill__container
                        .new-skill
                          input(placeholder="Название навыка").input-block.input--new-skill
                        .new-skill-procent
                          input(placeholder="100 %").input-block.input--new-skill-procent
                        .new-skill__button
                          .add-button
                            .add-button__icon.add-button--big                 
    section#works.works
      .works__container.container
        .title__container
          h2.h2__title Блок «Работы»
        section.work-edit#work-edit
          .edit__block Редактирование работы
          .edit__container
            .load-file__block
              .load-file__container
                form.load-file__form
                  .load-file__title Перетащите или загрузите для загрузки изображения
                  input.load-file__input
                  button.button-click Загрузить
            .form-add-work__block
              .form-add-work__container
                .form-add-work__list
                  - var formDate = ['Название' , 'Ссылка']
                    each input , index in formDate
                      .form-add__item
                        label(for=`label${index}`) #{input}
                        .input-block__form-add
                          input(placeholder="" id=`label${index}`).input-block.input--form-add
                    .form-add__item
                        label(for=`label3`) Описание
                        .input-block__form-add
                          textarea.textarea-block.textarea--form-add
                    .form-add__item
                        label(for="label4") Добавление тэга
                        .input-block__form-add
                          input(placeholder="" id="label4").input-block.input--form-add
                        .tags__contener
                          .tags__list
                            - var tags = ['html', 'css' , 'javascript']
                            each tag in tags
                              .tags__iteam 
                                .tags__iteam__title #{tag}
                                .tags__iteam__icon close
                    .form-add__button
                      button.button-no-click.form-add--button-no-click Отмена
                      button.button-click.form-add--button-click Загрузить      
        section.works-list#works-list
          .works-list__container
            .work-iteam.work-iteam--button
              .block-iteam__container
                .block-add-button
                  .block-add-button__container
                    button.block-add-button +
                    .block-add-title Добавить работу
            .work-iteam
              .work-iteam__container
                .block__image-block
                  .block__image
                    img
                  .block__tags
                    .tags__list
                    - var tags = ['html', 'css' , 'javascript']
                    each tag in tags
                      .tags__iteam 
                        .tags__iteam__title #{tag}                  
                .block__content
                  .block__title Сайт школы образования
                  .block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .block__link
                    a(href="") http://loftschool.ru
                  .block__button
                    .block__button__list
                    - 
                      var buttons = [ 
                        {'title':'Править' , 'icon' : 'edit'}, 
                        {'title':'Удалить' , 'icon' : 'remove'},
                        ]

                    each button in buttons
                      .block__button__item
                        .block__button__title #{button.title}                     
                        .block__button__icon #{button.icon}                     

    section#reviews.reviews
     .reviews__container.container
        .title__container Блок «Отзывы»
        section.reviews-edit#reviews-edit
          .edit__block Новый отзыв
          .edit__container.reviews-edit__block          
            .reviews-edit__file.form
              .file__container
                .file__icon
                  img
                .file__title Добавить фото
                input.load-file__input
            .reviews-input
                  - var formDate = ['Имя автора' , 'Тутал автора']
                    each input , index in formDate
                      .form-add__item
                        label(for=`label${index}`) #{input}
                        .input-block__form-add
                          input(placeholder="" id=`label${index}`).input-block.input--form-add
                    .form-add__item
                        label(for=`label3`) Отзывы
                        .input-block__form-add
                          textarea.textarea-block.textarea--form--add
                    .form-add__button
                      button.button-no-click.form-add--button-no-click Отмена
                      button.button-click.form-add--button-click Загрузить                
        section.reviews-list#reviews-list
          .reviews-list__container
            .review-iteam.review-iteam--button
              .block-iteam__container
                .block-add-button
                  .block-add-button__container
                    button.block-add-button +
                    .block-add-title Добавить Отзыв
            .review-iteam
              .review-iteam__container
                .block__user
                  .user__avatar
                    img
                  .user__content
                    .user__name Владимир Сабанцев
                    .user__pr Преподаватель                        
                .block__content
                  .block__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .block__button
                    .block__button__list
                    - 
                      var buttons = [ 
                        {'title':'Править' , 'icon' : 'edit'}, 
                        {'title':'Удалить' , 'icon' : 'remove'},
                        ]

                    each button in buttons
                      .block__button__item
                        .block__button__title #{button.title}                     
                        .block__button__icon #{button.icon}               
</template>