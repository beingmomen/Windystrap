import { ref, onMounted } from "vue";

export default () => {
  const setTheme = (theme) => {
    localStorage.setItem("windyStrapTheme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  const theme = localStorage.getItem("windyStrapTheme");
  document.addEventListener("DOMContentLoaded", setTheme(theme));

  return { setTheme };
};
