import { boot } from 'quasar/wrappers';
import VueGoogleMaps from '@fawmi/vue-google-maps';

export default boot(({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD8COgcsAdxv4kNyxs8cerXp7rBOcsGBws',
      language: 'en',
    },
    autobindAllEvents: true,
  });
});
