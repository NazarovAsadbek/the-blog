<script>
import LightThemeIcon from "@/components/Common/Theme/LightThemeIcon.vue";
import DarkThemeIcon from "@/components/Common/Theme/DarkThemeIcon.vue";
export default {
  components: { DarkThemeIcon, LightThemeIcon },
  data() {
    return { isDark: false };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem("IS_DARK_THEME", JSON.stringify(!this.isDark));
    },
  },
  mounted() {
    this.isDark = JSON.parse(localStorage.getItem("IS_DARK_THEME")) ?? false;
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
