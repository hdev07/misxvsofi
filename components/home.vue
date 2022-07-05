<template>
  <div id="home" class="h-screen w-screen bg-img flex justify-center">
    <div class="z-10 top-96 absolute p-4 mt-8">
      <p class="text-4xl text-center text-white m-4 mb-12 font-bold text-uppercase">
        Sofía
      </p>
      <p class="text-6xl text-center text-white">Mis XV Años</p>
      <p v-if="message === true">¡YA EMPEZÓ!</p>
      <div v-else class="grid-cols-4 flex justify-center">
        <div class="px-2 pt-8">
          <p class="text-center text-white text-3xl">{{ remainDays }}</p>
          <p class="text-center text-white text-2xl">Dias</p>
        </div>
        <div class="px-2 pt-8">
          <p class="text-center text-white text-3xl">{{ remainHours }}</p>
          <p class="text-center text-white text-2xl">Horas</p>
        </div>
        <div class="px-2 pt-8">
          <p class="text-center text-white text-3xl">{{ remainMinutes }}</p>
          <p class="text-center text-white text-2xl">Minutos</p>
        </div>
        <div class="px-2 pt-8">
          <p class="text-center text-white text-3xl">{{ remainSeconds }}</p>
          <p class="text-center text-white text-2xl">Segundos</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainSeconds: 0,
      remainMinutes: 0,
      remainHours: 0,
      remainDays: 0,
      message: false,
    };
  },
  mounted() {
    this.getDate("Dec 3 2022 18:00:00 GMT-0600");
  },
  methods: {
    getDate(deadline) {
      let now = new Date();
      this.remainTime = (new Date(deadline) - now + 1000) / 1000;
      this.remainSeconds = ("0" + Math.floor(this.remainTime % 60)).slice(-2);
      this.remainMinutes = ("0" + Math.floor((this.remainTime / 60) % 60)).slice(-2);
      this.remainHours = ("0" + Math.floor((this.remainTime / 3600) % 24)).slice(-2);
      this.remainDays = Math.floor(this.remainTime / (3600 * 24));

      const timerUpdate = setInterval(() => {
        this.getDate(deadline);

        if (this.remainTime <= 1) {
          clearInterval(timerUpdate);
          this.message = true;
        }
      }, 1000);
    },
  },
};
</script>

<style></style>
