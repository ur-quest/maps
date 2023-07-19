import { defineStore } from 'pinia';
import { ILocation } from 'src/interfaces/ILocation';
import { api } from 'src/boot/axios';

interface Store { currentLocation: ILocation | null, searchLocation: ILocation | null }

export default defineStore('locations', {
  state: ():Store => ({
    currentLocation: null,
    searchLocation: null,
  }),

  actions: {
    setCurrentLocation(value: ILocation) {
      this.currentLocation = value;
    },

    async setSearchLocation(value: ILocation) {
      const marker = { ...value };
      const latlng = `${marker.position.lat}, ${marker.position.lng}`;
      const params = {
        latlng,
        key: import.meta.env.VITE_API_KEY,
      };

      const response = await api.get('https://maps.googleapis.com/maps/api/geocode/json', { params });

      if (response.data.results.length) {
        const [mainAddress, ...rest] = response.data.results;
        marker.address = mainAddress;
        this.searchLocation = marker;
      }
    },
  },
});
