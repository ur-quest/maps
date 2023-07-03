import { defineStore } from 'pinia';
import mapStyles from 'src/helpers/mapStyles';

export const useMapStore = defineStore('map', {
  state: () => ({
    map: {
      center: { lat: 51.093048, lng: 6.842120 },
      zoom: 7,
      typeId: 'terrain',
      options: {
        styles: mapStyles,
      },
    },
  }),

  getters: {
  },

  actions: {
  },
});
