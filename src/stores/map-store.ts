import { defineStore } from 'pinia';
import mapStyles from 'src/helpers/mapStyles';
import { IMap } from 'src/interfaces/IMap';
import { ICoordinates } from 'src/interfaces/ICoordinates';

export default defineStore('map', {
  state: ():IMap => ({
    center: { lat: 51.093048, lng: 6.842120 },
    zoom: 5,
    typeId: 'terrain',
    options: {
      styles: mapStyles,
    },
  }),

  actions: {
    setMapCenter(coordinates: ICoordinates) {
      this.center = coordinates;
    },
    setZoom(value: number) {
      this.zoom = value;
    },
  },
});
