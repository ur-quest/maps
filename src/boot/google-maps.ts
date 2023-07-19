import { boot } from 'quasar/wrappers';
import VueGoogleMaps from '@fawmi/vue-google-maps';

export default boot(({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_API_KEY,
      language: 'en',
    },
    autobindAllEvents: true,
  });
});
