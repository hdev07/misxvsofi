<template>
  <v-app>
    <Home />
    <!-- <Frase /> -->
    <Lugar />
  </v-app>
</template>
<script>
import Home from "./components/home.vue";
// import Frase from "./components/frase.vue";
import Lugar from "./components/lugar.vue";

export default {
  components: { Home, Frase, Lugar },
};
</script>
<style></style>
