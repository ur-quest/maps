<template>
    <div class="index-page">
      <SearchComponents/>
      <MapComponent
        :map="map"
        :markers="[currentMarker]"
        @on-map-click="onMapClick"
      />
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { CurrentLocation, SearchLocation } from 'src/models/Location';
import MapComponent from 'components/MapComponent.vue';
import SearchComponents from 'components/SearchComponent.vue';
import useMapStore from 'stores/map-store';
import useLocationsStore from 'src/stores/locations-store';

const mapStore = useMapStore();
const locationsStore = useLocationsStore();

const $q = useQuasar();

function foundLocation(pos):void {
  const { latitude, longitude, accuracy } = pos.coords;
  const currentLocation = new CurrentLocation({ latitude, longitude, accuracy });

  mapStore.setMapCenter(currentLocation.getInfo.position);
  mapStore.setZoom(15);

  if (accuracy < 50) {
    locationsStore.setCurrentLocation(currentLocation.getInfo);
  }
}

function error(err):void {
  throw new Error(err);
}

function onMapClick(event) {
  const latitude = event.latLng.lat();
  const longitude = event.latLng.lng();
  const searchLocation = new SearchLocation({ latitude, longitude });
  locationsStore.setSearchLocation(searchLocation.getInfo);
  mapStore.setZoom(15);
}

if (!$q.platform.is.mobile) {
  window.navigator.geolocation
    .watchPosition(foundLocation, error, { enableHighAccuracy: true });
}
</script>
