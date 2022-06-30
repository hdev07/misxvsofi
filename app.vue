<template>
  <v-app>
    <!-- <div v-if="spin" class="loading show">
      <div class="spin"></div>
    </div> -->
    <Home />
  </v-app>
</template>
<script>
import Home from "./components/home.vue";
export default {
  components: { Home },
  // data() {
  //   return {
  //     spin: true,
  //   };
  // },
  // mounted() {
  //   this.loading();
  // },
  // methods: {
  //   loading() {
  //     setTimeout(() => {
  //       this.spin = false;
  //     }, 400);
  //   },
  // },
};
</script>
<style>
/* .loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: 1s all;
  opacity: 0;
}
.loading.show {
  opacity: 1;
}
.loading .spin {
  border: 3px solid rgba(246, 112, 239, 0.2);
  border-top-color: #ff3ceb;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
} */
</style>
