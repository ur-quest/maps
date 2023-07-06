import { defineStore } from 'pinia';
import mapStyles from 'src/helpers/mapStyles';
import { IMap } from 'src/interfaces/IMap';
import { IMarker } from 'src/interfaces/IMarker';
import { ICoordinates } from 'src/interfaces/ICoordinates';

interface Store { map: IMap, currentMarker: IMarker | object }

export const useMapStore = defineStore('map', {
  state: ():Store => ({
    map: {
      center: { lat: 51.093048, lng: 6.842120 },
      zoom: 5,
      typeId: 'terrain',
      options: {
        styles: mapStyles,
      },
    },
    currentMarker: {},
  }),

  actions: {
    setCoordinates(coordinates: ICoordinates) {
      this.map.center = coordinates;
    },
    setZoom(value: number) {
      this.map.zoom = value;
    },
    setCurrentMarker(value: IMarker) {
      this.currentMarker = value;
    },
  },
});
