<template>
    <div class="index-page">
      <SearchComponents/>
      <MapComponent :map="map" :markers="[currentMarker]"/>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useMapStore } from 'stores/map-store';
import { storeToRefs } from 'pinia';
import MapComponent from 'components/MapComponent.vue';
import SearchComponents from 'components/SearchComponent.vue';

const $q = useQuasar();
const store = useMapStore();
const { map, currentMarker } = storeToRefs(store);

function success(pos):void {
  const coordinates = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
  };

  store.setCoordinates(coordinates);
  store.setZoom(15);

  if (pos.coords.accuracy < 20) {
    store.setCurrentMarker({
      position: coordinates,
      icon: 'https://abrakadabra.fun/uploads/posts/2021-12/1640747246_17-abrakadabra-fun-p-znachok-geolokatsii-bez-fona-17.png',
      clickable: false,
      draggable: false,
    });
  }
}

function error(err):void {
  console.log(err);
}

if ($q.platform.is.desktop) {
  window.navigator.geolocation
    .watchPosition(success, error, { enableHighAccuracy: true });
}
</script>
