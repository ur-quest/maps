<template>
    <GMapMap
        :center="map.center"
        :zoom="map.zoom"
        :options="map.options"
        :map-type-id="map.typeId"
        class="map-component"
    />
</template>

<script setup lang="ts">
import { useMapStore } from 'stores/map-store';
import { storeToRefs } from 'pinia';

const store = useMapStore();
const { map } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.map-component {
    width: 100vw;
    height: 100vh;
}
</style>
