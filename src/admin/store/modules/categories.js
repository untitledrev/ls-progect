import showErrorTooltip from '@/helpers/showErrorTooltip.js';


export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, data) => (state.categories = data),
    ADD_CATEGORY: (state, category) => state.categories.push(category),
    REMOVE_CATEGOR: (state, deletedCategory) => {
      state.categories = state.categories.filter(category => {
        return category.id != deletedCategory.id;
      });
    },
    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id == newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL: (state, deletedSkill) => {
      const removeSkillCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id != deletedSkill.id
        );
      };
      const findCategory = category => {
        if (category.id == deletedSkill.category) {
          removeSkillCategory(category);
        }
        return category;
      };
      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL: (state, editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === editedSkill.id ? editedSkill : skill;
        });
      };

      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    }
  },
  actions: {
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
        commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Категория успешно добавленна' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async removeCategory({ commit }, category) {
      try {
        const { data } = await this.$axios.delete(`/categories/${category.id}`);
        commit("REMOVE_CATEGOR", category);
        commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Категория успешно удалена' }, { root: true })  
      } catch (error) {
        showErrorTooltip(context, error);
      }

    },
    async editCategory({ commit }, editCategory) {
      try {
        const { data } = await this.$axios.post(`/categories/${editCategory.id}`, { title: editCategory.category });
        commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Категория успешно обновлена' }, { root: true });       
      } catch (error) {
        showErrorTooltip(context, error);
      }

    },

    /* Получение всех категорий */
    async fetchCategories({ commit }, user) {
      try {       
        
        const { data } = await this.$axios.get(`/categories/${user}`);
        commit("SET_CATEGORIES", data);

      }
      catch (error) {
        
        throw new Error(error.response.data.error || error.response.data.message);
      }

    }

  }
};