import { boot } from 'quasar/wrappers';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import apiKey from 'src/helpers/apiKey';

export default boot(({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: apiKey,
      language: 'en',
    },
    autobindAllEvents: true,
  });
});
