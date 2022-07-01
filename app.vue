<template>
  <v-app>
    <Home />
    <Frase />
  </v-app>
</template>
<script>
import Home from "./components/home.vue";
import Frase from "./components/Frase.vue";

export default {
  components: { Home, Frase },
};
</script>
<style></style>
