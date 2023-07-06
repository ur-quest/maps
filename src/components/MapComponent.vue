<template>
  <GMapMap
      :center="center"
      :zoom="zoom"
      :options="options"
      :map-type-id="typeId"
      class="map-component"
      @click="$emit('on-map-click', $event)"
  >
    <GMapMarker
      v-if="currentLocation"
      :position="currentLocation.position"
      :icon="{ url: currentLocation.icon, scaledSize: { width: 30, height:  30}}"
      :clickable="currentLocation.clickable"
      :draggable="currentLocation.draggable"
    />

    <GMapMarker
      v-if="searchLocation"
      :position="searchLocation.position"
      :icon="{ url: searchLocation.icon, scaledSize: { width: 50, height:  50}}"
      :clickable="searchLocation.clickable"
      :draggable="searchLocation.draggable"
    />
  </GMapMap>
</template>

<script setup lang="ts">
import useMapStore from 'stores/map-store';
import useLocationsStore from 'src/stores/locations-store';
import { storeToRefs } from 'pinia';

const mapStore = useMapStore();
const locationsStore = useLocationsStore();

const {
  center, zoom, options, typeId,
} = storeToRefs(mapStore);

const { currentLocation = null, searchLocation = null } = storeToRefs(locationsStore);
</script>

<style lang="scss" scoped>
.map-component {
  width: 100vw;
  height: 90vh;
  top: 10vh;
  position: absolute;
}
</style>
