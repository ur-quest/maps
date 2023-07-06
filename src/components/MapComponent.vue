<template>
  <GMapMap
      :center="map.center"
      :zoom="map.zoom"
      :options="map.options"
      :map-type-id="map.typeId"
      class="map-component"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :icon="{ url: m.icon, scaledSize: { width: 30, height:  30}}"
      :clickable="false"
      :draggable="false"
    />
  </GMapMap>
</template>

<script setup lang="ts">
import { IMap } from 'src/interfaces/IMap';
import { IMarker } from 'src/interfaces/IMarker';

defineProps<{ map: IMap, markers: IMarker[] }>();
</script>

<style lang="scss" scoped>
.map-component {
  width: 100vw;
  height: 90vh;
  top: 10vh;
  position: absolute;
}
</style>
