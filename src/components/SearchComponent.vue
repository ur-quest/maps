<template>
    <div class="search-component color-primary">
        <q-input
            v-model="searchInput"
            rounded
            standout
            bottom-slots
            bg-color="dark"
            label-color="primary"
            label="Введите адрес"
            @update:searchInput="onUpdate"
        >
            <template v-slot:prepend>
                <q-icon name="place" color="primary"/>
            </template>

            <template v-slot:append>
                <q-icon
                    name="close"
                    color="primary"
                    class="cursor-pointer"
                    @click="onClear"
                />
            </template>
        </q-input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchInput = ref('');

function onUpdate(value) {
  console.log(value);
}

function onClear() {
  searchInput.value = '';
}
</script>

<style lang="scss" scoped>
.search-component {
    height: 10vh;
    background: $primary;
    box-shadow: 10px 5px 5px $dark;
    padding: 2vh 5vh;
}
</style>
