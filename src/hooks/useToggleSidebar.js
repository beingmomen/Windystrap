import { ref } from "vue";

export default () => {
  const fullSidebar = ref(true);
  const fullSidebarMobile = ref(false);
  const width = ref(null);

  const toggleFullSidebar = () => {
    if (width.value >= 1024) {
      fullSidebar.value = !fullSidebar.value;
    } else if (width.value <= 767) {
      fullSidebarMobile.value = !fullSidebarMobile.value;
    }
  };

  const resizePage = () => {
    document.addEventListener;

    width.value = document.documentElement.clientWidth;

    if (width.value > 1023) {
      fullSidebar.value = true;
    } else if (width.value <= 1023 && width.value > 768) {
      fullSidebar.value = false;
    } else if (width.value <= 767) {
      fullSidebar.value = true;
    }
  };

  window.addEventListener("load", resizePage);
  window.addEventListener("resize", resizePage);

  return { fullSidebar, fullSidebarMobile, toggleFullSidebar };
};
