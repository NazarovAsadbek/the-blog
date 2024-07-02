<script>
import LightThemeIcon from "@/components/Common/Theme/LightThemeIcon.vue";
import DarkThemeIcon from "@/components/Common/Theme/DarkThemeIcon.vue";
export default {
  components: { DarkThemeIcon, LightThemeIcon },
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      const appWrapper = document.querySelector(".wrapper");
      appWrapper.classList.toggle("dark");
    },
    setThemeToLocalStorage() {
      localStorage.setItem("IS_DARK_THEME", this.isDark);
    },
  },
  mounted() {
    this.isDark = JSON.parse(localStorage.getItem("IS_DARK_THEME")) ?? false;
    const appWrapper = document.querySelector(".wrapper");
    if (this.isDark) {
      appWrapper.classList.add("dark");
    }
    window.addEventListener("beforeunload", this.setThemeToLocalStorage);
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.setThemeToLocalStorage);
  },
};
</script>

<template>
  <Transition name="slide-up">
    <button v-if="isDark" @click="toggleTheme">
      <LightThemeIcon />
    </button>
    <button v-else @click="toggleTheme">
      <DarkThemeIcon />
    </button>
  </Transition>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
