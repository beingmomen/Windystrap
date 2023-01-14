import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import es from "../locales/es.json";
import ar from "../locales/ar.json";

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || "en",
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "ar",
  messages: {
    en,
    ar,
    es,
  },
});

export default i18n;
