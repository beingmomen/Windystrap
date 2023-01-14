import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

export default {
  fontIcon: "fa-icon",
  FontAwesomeIcon: FontAwesomeIcon,
};

// How To Use Fontawesome
//  <fa-icon :icon="['fas', 'chart-simple']" class="fa-xl" />
