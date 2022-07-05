<template>
  <div class="my-8">
    <div class="flex justify-center my-4">
      <p class="text-center font-bold text-4xl">Dónde & Cuándo</p>
    </div>
    <div class="flex justify-center px-4 m-2 pb-4">
      <a class="block p-6 max-w-sm rounded-lg border border-gray-300 shadow-md">
        <div>
          <p class="mb-6 text-3xl text-center">Ceremonia Religiosa</p>
          <img
            class="rounded-lg shadow-md mb-6"
            src="https://picsum.photos/600/300"
            alt=""
          />
          <p class="mb-2 text-1xl text-uppercase">Parroquia san francisco</p>
        </div>
        <div class="flex text-justify">
          <p class="font-bold">Cuándo:&nbsp;</p>
          <p class="text-right">3 de diciembre del 2022 a las 18:00 hrs.</p>
        </div>
        <br />
        <div class="flex text-justify">
          <p class="font-bold">Dirección:&nbsp;</p>
          <p class="text-right">
            Mariano Arista 200, San Francisco, 42000 Pachuca de Soto, Hgo.
          </p>
        </div>
        <div class="pt-4">
          <button
            @click="showModal"
            data-modal-toggle="defaultModal"
            type="button"
            class="w-full flex justify-center text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              class="h-4 mr-2 -ml-1 w-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Ver ubicacion
          </button>
          <button
            type="button"
            class="w-full flex justify-center text-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              class="h-4 mr-2 -ml-1 w-8"
              fill="#000000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Agregar al calendario
          </button>

          <!-- Main modal -->
          <div
            v-show="defaultModal"
            tabindex="-1"
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-screen bg-gray-100"
          >
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto flex items-center">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-4 rounded-t border-b">
                  <h3 class="text-xl font-semibold">Ubicación</h3>
                  <button
                    @click="showModal"
                    type="button"
                    class="bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="#00000"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed">
                    With less than a month to go before the European Union enacts new
                    consumer privacy laws for its citizens, companies around the world are
                    updating their terms of service agreements to comply.
                  </p>
                  <p class="text-base leading-relaxed">
                    The European Union’s General Data Protection Regulation (G.D.P.R.)
                    goes into effect on May 25 and is meant to ensure a common set of data
                    rights in the European Union. It requires organizations to notify
                    users as soon as possible of high-risk data breaches that could
                    personally affect them.
                  </p>
                </div>
                <!-- Modal footer -->
                <div
                  class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200"
                >
                  <button
                    @click="showModal"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    I accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="flex justify-center px-4 m-2">
      <a class="block p-6 max-w-sm rounded-lg border border-gray-300 shadow-md">
        <div>
          <p class="mb-6 text-3xl text-center">Recepción</p>
          <img
            class="rounded-lg shadow-md mb-6"
            src="https://picsum.photos/601/300"
            alt=""
          />
          <p class="mb-2 text-1xl text-uppercase">Salón Benevento</p>
        </div>
        <div class="flex text-justify">
          <p class="font-bold">Cuándo:&nbsp;</p>
          <p class="text-right">3 de diciembre del 2022 a las 20:00 hrs.</p>
        </div>
        <br />
        <div class="flex text-justify">
          <p class="font-bold">Dirección:&nbsp;</p>
          <p class="text-right">
            Km 2.1, Blvrd Ramón G. Bonfil, Zona Plateada, Pachuca de Soto, Hgo.
          </p>
        </div>
        <div class="pt-4">
          <button
            @click="showModal"
            data-modal-toggle="defaultModal"
            type="button"
            class="w-full flex justify-center text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              class="h-4 mr-2 -ml-1 w-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Ver ubicacion
          </button>
          <button
            type="button"
            class="w-full flex justify-center text-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              class="h-4 mr-2 -ml-1 w-8"
              fill="#000000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Agregar al calendario
          </button>

          <!-- Main modal -->
          <div
            v-show="defaultModal"
            tabindex="-1"
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-screen bg-gray-100"
          >
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto flex items-center">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-4 rounded-t border-b">
                  <h3 class="text-xl font-semibold">Ubicación</h3>
                  <button
                    @click="showModal"
                    type="button"
                    class="bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="#00000"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed">
                    With less than a month to go before the European Union enacts new
                    consumer privacy laws for its citizens, companies around the world are
                    updating their terms of service agreements to comply.
                  </p>
                  <p class="text-base leading-relaxed">
                    The European Union’s General Data Protection Regulation (G.D.P.R.)
                    goes into effect on May 25 and is meant to ensure a common set of data
                    rights in the European Union. It requires organizations to notify
                    users as soon as possible of high-risk data breaches that could
                    personally affect them.
                  </p>
                </div>
                <!-- Modal footer -->
                <div
                  class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200"
                >
                  <button
                    @click="showModal"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    I accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultModal: false,
    };
  },
  methods: {
    showModal() {
      this.defaultModal = !this.defaultModal;
    },
  },
};
</script>
