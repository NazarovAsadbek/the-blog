import { computed } from "https://play.vuejs.org/vue.runtime.esm-browser.js";

const useTheme = () => {
  const isDark = localStorage.getItem("IS_DARK_THEME");
  const theme = computed(() => {
    return Boolean(isDark);
  });
  const themeName = computed(() => {
    return isDark ? "dark" : "light";
  });
  const toggleTheme = () => {
    localStorage.setItem("IS_DARK_THEME", !theme.value);
  };
  return {
    isDark,
    theme,
    themeName,
    toggleTheme,
  };
};
export { useTheme };
