<template>
  <header class="app-header">
    <div class="app-header__container">
      <router-link to="/">
        <AppLogo />
      </router-link>
      <ul class="app-header__menu">
        <li>
          <router-link active-class="active" to="/">Главная</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/about">Заметки</router-link>
        </li>
        <li>
          <AppTheme class="app-header__menu-theme"></AppTheme>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import AppLogo from "@/components/Common/AppLogo.vue";
import AppTheme from "@/components/Common/Theme/AppTheme.vue";
export default {
  components: { AppTheme, AppLogo },
  data() {
    return {
      activeTheme: "light",
    };
  },
  computed: {
    isDark() {
      return this.activeTheme === "dark";
    },
  },
  methods: {
    toggleTheme() {
      this.activeTheme = this.isDark ? "light" : "dark";
    },
  },
};
</script>

<style lang="css" scoped>
.app-header {
  display: block;
  z-index: 2;
  margin-bottom: 20px;
  padding-top: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.app-header__container {
  width: 100%;
  max-width: 1025px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.app-header__menu {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 40px;
  display: flex;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
}
.app-header__menu-theme {
  width: 25px;
  max-width: 25px;
  position: absolute;
}
.app-header__menu li {
  cursor: pointer;
  margin-left: 30px;
}

.app-header__menu li a {
  color: var(--app-header-menu-text);
  opacity: 0.5;
  letter-spacing: 0.3px;
}

.app-header__menu li a.active {
  opacity: 1;
  font-weight: 500;
}

@media (max-width: 1025px) {
  .app-header {
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  .app-header__container {
    flex-direction: column;
    padding: 20px;
    width: auto;
  }

  .app-header__menu {
    margin-top: 25px;
  }
}

@media (max-width: 576px) {
  .app-header {
    padding-top: 30px;
  }

  .app-header__container {
    padding: 0;
  }

  .app-header__menu {
    margin-top: 15px;
  }
}
</style>
