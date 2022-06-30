<template>
  <div class="h-screen w-screen bg-img flex justify-center">
    <div class="z-10 bottom-5 absolute p-4">
      <h1 class="text-xl text-center">Sofía</h1>
      <h1 class="text-xl text-center">Mis XV Años</h1>
      <h1 v-if="message === true">¡YA EMPEZÓ!</h1>
      <div v-else class="grid-cols-4 flex">
        <div class="px-2">
          <h1>{{ remainDays }}</h1>
          <p>Dias</p>
        </div>
        <div class="px-2">
          <h1>{{ remainHours }}</h1>
          <p>Horas</p>
        </div>
        <div class="px-2">
          <h1>{{ remainMinutes }}</h1>
          <p>Minutos</p>
        </div>
        <div class="px-2">
          <h1>{{ remainSeconds }}</h1>
          <p>Segundos</p>
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
    this.getDate("Dec 3 2022 20:00:00 GMT-0600");
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
