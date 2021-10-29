<template>
    <div class="">
        <!-- hero -->
        <div class=" bg-gradient-to-r from-customcolor-cus5 to-customcolor-cus6">
          <kinesis-container class="flex h-screen">
              <div
                  class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                  <kinesis-element :strength="50">
                      <div class="relative left-96 top-96">
                          <img class="w-16 h-16 -rotate-90" src="../assets/image/Polygon.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="20">
                      <div class="relative right-96 bottom-72">
                          <img class="w-16 h-16 " src="../assets/image/Polygon.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="40">
                      <div class="relative right-64 top-64">
                          <img class="w-16 h-16 " src="../assets/image/Polygon.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="10">
                      <div class="relative left-96 bottom-64">
                          <img class="w-16 h-16 " src="../assets/image/Polygon.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="50">
                      <div class="relative right-0 bottom-10">
                          <img class="w-16 h-16 " src="../assets/image/Polygon.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="50">
                      <div class="relative right-96 bottom-24">
                          <img class="w-16 h-16" src="../assets/image/Polygon.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="30">
                      <div class="relative left-96 bottom-24">
                          <img class="w-16 h-16 " src="../assets/image/Polygon.png">
                      </div>
                  </kinesis-element>

              </div>
              <div
                  class="relative px-4 py-5 m-auto text-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

                  <div class="flex flex-wrap-reverse w-full -mx-1 overflow-hidden md:flex-wrap">
                      <div class="w-full px-1 my-1 overflow-hidden md:w-1/2 ">
                          <div class="flex h-full">
                              <div class="m-auto">
                                  <div class="text-5xl text-center md:text-left md:text-7xl lg:text-9xl">
                                      HMIF
                                  </div>
                                  <div class="italic ">
                                      "HIMPUNAN MAHASISWA INFORMATIKA"
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="w-full px-1 my-1 overflow-hidden md:w-1/2">
                          <img class="w-full h-full " src="../assets/image/examimage.png">
                      </div>
                  </div>
                  <div class="flex h-full">
                      <div class="m-auto">
                          <div class="mt-10 md:mt-5">
                              <div class="flex justify-center w-10 h-10 border-2 border-white rounded-full ">
                                  <svg class="h-8 w-8 text-white animate-bounce mt-1.5" width="24" height="24"
                                      viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                      stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <line x1="12" y1="5" x2="12" y2="19" />
                                      <line x1="16" y1="15" x2="12" y2="19" />
                                      <line x1="8" y1="15" x2="12" y2="19" /></svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </kinesis-container>
      </div>


      <div class="h-full">
          <kinesis-container event="scroll" class="h-full">
              <div
                  class="flex h-full px-4 py-5 m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                  <div
                      class="absolute inset-x-0 top-0 z-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                      <kinesis-element :strength="100 ">
                          <div class="relative right-96 bottom-72 rotate-12">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                      <kinesis-element :strength="200 ">
                          <div class="relative rotate-45 left-96 top-72">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                      <kinesis-element :strength="100 ">
                          <div class="relative rotate-180 left-96 bottom-72">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                      <kinesis-element :strength="300 ">
                          <div class="relative rotate-90 right-96 top-64">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                      <kinesis-element :strength="150 ">
                          <div class="relative right-0 bottom-48">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                  </div>
                  <div
                      class="absolute inset-x-0 inset-y-0 top-0 z-0 flex items-center justify-center overflow-hidden md:hidden">

                      <kinesis-element :strength="100 ">
                          <div class="relative right-96 top-72">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                      <kinesis-element :strength="150 ">
                          <div class="relative left-56 bottom-56">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                      <kinesis-element :strength="200 ">
                          <div class="relative right-56 bottom-72">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                      <kinesis-element :strength="100 ">
                          <div class="relative left-46 top-72">
                              <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                          </div>
                      </kinesis-element>
                  </div>
                  <div class="relative z-10 flex flex-wrap m-auto -mx-1 overflow-hidden">

                      <div class="w-full px-1 my-1 overflow-hidden">
                          <div class="text-xl italic font-semibold text-center">
                              “Implement Your Solution with Creativity”
                          </div>
                      </div>

                      <div class="w-full px-1 my-1 overflow-hidden">
                          <div class="flex flex-wrap -mx-1 overflow-hidden ">
                              <div class="w-full px-1 py-5 my-1 overflow-hidden md:w-1/2 md:p-16 md:px-10">
                                  <div class="z-10 p-5 bg-white rounded shadow-lg">
                                      <div class="mb-5 text-xl font-bold text-center uppercase md:text-2xl">
                                          Visi
                                      </div>
                                      <div class="font-sans ">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ipsa nam
                                          quas
                                          voluptate nulla consequuntur maxime, mollitia commodi placeat nihil
                                          fugit
                                          consequatur facere tempore explicabo, repellat, molestias cum
                                          architecto.
                                          Id.
                                      </div>
                                  </div>
                              </div>

                              <div class="w-full px-1 py-5 my-1 overflow-hidden md:w-1/2 md:p-16 md:px-10">
                                  <div class="z-10 p-5 bg-white rounded shadow-lg">
                                      <div class="mb-5 text-xl font-bold text-center uppercase md:text-2xl">
                                          Misi
                                      </div>
                                      <div class="font-sans ">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ipsa nam
                                          quas
                                          voluptate nulla consequuntur maxime, mollitia commodi placeat nihil
                                          fugit
                                          consequatur facere tempore explicabo, repellat, molestias cum
                                          architecto.
                                          Id.
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </kinesis-container>
      </div>

      <!-- artikel -->
      <kinesis-container event="scroll" class="flex h-full lg:h-screen">
          <div class="px-4 py-16 m-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div
                  class="absolute inset-x-0 top-0 z-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                  <kinesis-element :strength="100 ">
                      <div class="relative right-96 bottom-72 rotate-12">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="100 ">
                      <div class="relative rotate-45 left-96 top-96">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="200 ">
                      <div class="relative rotate-180 left-96 bottom-72">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="150 ">
                      <div class="relative rotate-90 right-96 top-96">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="300 ">
                      <div class="relative right-0 bottom-64">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
              </div>

              <div class="relative flex justify-center mb-24">
                  <div class="relative flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                      <a href="/" aria-label="Item" class="absolute z-0 -ml-10">
                          <img class="w-28 h-28" src="../assets/image/Polygontitle.png">
                      </a>
                      <h2
                          class="z-10 font-sans text-3xl font-bold leading-none tracking-tight text-customcolor-cus3 sm:text-4xl ">
                          <span class="inline-block mb-2 uppercase">Artikel</span>
                          <div
                              class="h-1 ml-auto duration-300 origin-left transform bg-customcolor-cus3 scale-x-30 group-hover:scale-x-100">
                          </div>
                      </h2>
                  </div>
              </div>

              <div class="relative z-10 grid gap-6 row-gap-5 lg:grid-cols-3">
                  <a href="#">
                      <img class="object-cover w-full h-64 mb-3 rounded shadow-lg lg:h-48 xl:h-64"
                          src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                          alt="" />
                      <p class="mb-2 text-sm text-gray-700">
                          24 August 2021
                      </p>
                      <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                          A slice of heaven
                      </p>
                      <p class="mb-2 text-gray-700">
                          O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                          the
                          bicycle shed, Hercules Morse.
                      </p>
                      <div class="flex flex-row mb-2 text-gray-700">
                          <div class="flex">
                              <svg class="inline w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              <p class="inline ml-2">100</p>
                          </div>
                          <div class="flex px-2">
                              <svg class="inline w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                              <p class="inline ml-2">100</p>
                          </div>
                      </div>
                  </a>
                  <a href="#">
                      <img class="object-cover w-full h-64 mb-3 rounded shadow-lg lg:h-48 xl:h-64"
                          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="" />
                      <p class="text-sm text-gray-700">
                          24 August 2021
                      </p>
                      <h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                          A slice of heaven
                      </h5>
                      <p class="mb-2 text-gray-700">
                          O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                          the
                          bicycle shed, Hercules Morse.
                      </p>
                      <div class="flex flex-row mb-2 text-gray-700">
                          <div class="flex">
                              <svg class="inline w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              <p class="inline ml-2">100</p>
                          </div>
                          <div class="flex px-2">
                              <svg class="inline w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                              <p class="inline ml-2">100</p>
                          </div>
                      </div>
                  </a>
                  <a href="#">
                      <img class="object-cover w-full h-64 mb-3 rounded shadow-lg lg:h-48 xl:h-64"
                          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="" />
                      <p class="text-sm text-gray-700">
                          24 August 2021
                      </p>
                      <h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                          A slice of heaven
                      </h5>
                      <p class="mb-2 text-gray-700">
                          O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                          the
                          bicycle shed, Hercules Morse.
                      </p>
                      <div class="flex flex-row mb-2 text-gray-700">
                          <div class="flex">
                              <svg class="inline w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              <p class="inline ml-2">100</p>
                          </div>
                          <div class="flex px-2">
                              <svg class="inline w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                              <p class="inline ml-2">100</p>
                          </div>
                      </div>
                  </a>
              </div>
          </div>
      </kinesis-container>
      <!-- galeri -->
      <kinesis-container event="scroll" class="flex h-full lg:h-screen">
          <div
              class="px-4 py-16 m-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div
                  class="absolute inset-x-0 top-0 z-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                  <kinesis-element :strength="200 ">
                      <div class="relative right-96 bottom-72 rotate-12">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="200 ">
                      <div class="relative rotate-45 left-64 top-96">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="50 ">
                      <div class="relative rotate-180 left-96 bottom-72">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="10 ">
                      <div class="relative rotate-90 right-96 top-96">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
                  <kinesis-element :strength="300 ">
                      <div class="relative right-0 bottom-48">
                          <img class="w-16 h-16 " src="../assets/image/Polygontitle.png">
                      </div>
                  </kinesis-element>
              </div>
              <div class="relative z-10 flex justify-center mb-10">
                  <div class="relative flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                      <a href="/" aria-label="Item" class="absolute z-0 -ml-10">
                          <img class="w-28 h-28" src="../assets/image/Polygontitle.png">
                      </a>
                      <h2
                          class="z-10 font-sans text-3xl font-bold leading-none tracking-tight text-customcolor-cus3 sm:text-4xl ">
                          <span class="inline-block mb-2 uppercase">Galeri</span>
                          <div
                              class="h-1 ml-auto duration-300 origin-left transform bg-customcolor-cus3 scale-x-30 group-hover:scale-x-100">
                          </div>
                      </h2>
                  </div>
              </div>
              <div class="relative z-10">
                  <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                      <a href="/" aria-label="View Item">
                          <div
                              class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                              <img class="object-cover w-full h-56 md:h-64 xl:h-80"
                                  src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                  alt="" />
                              <div
                                  class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                  <p class="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
                                  <p class="text-sm tracking-wide text-gray-300">
                                      Painted between 1503 and 1517, Da Vinci’s alluring portrait has been
                                      dogged by two questions since the day it was made: Who’s the subject and
                                      why is she smiling?
                                  </p>
                              </div>
                          </div>
                      </a>
                      <a href="/" aria-label="View Item">
                          <div
                              class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                              <img class="object-cover w-full h-56 md:h-64 xl:h-80"
                                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                  alt="" />
                              <div
                                  class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                  <p class="mb-4 text-lg font-bold text-gray-100">The Starry Night</p>
                                  <p class="text-sm tracking-wide text-gray-300">
                                      Vincent Van Gogh’s most popular painting, The Starry Night was created
                                      by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in
                                      1889.
                                  </p>
                              </div>
                          </div>
                      </a>
                      <a href="/" aria-label="View Item">
                          <div
                              class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                              <img class="object-cover w-full h-56 md:h-64 xl:h-80"
                                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                  alt="" />
                              <div
                                  class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                  <p class="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                                  <p class="text-sm tracking-wide text-gray-300">
                                      Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s
                                      fin-de-siècle portrayal of intimacy, is a mix of Symbolism and Vienna
                                      Jugendstil, the Austrian variant of Art Nouveau.
                                  </p>
                              </div>
                          </div>
                      </a>
                      <a href="/" aria-label="View Item">
                          <div
                              class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                              <img class="object-cover w-full h-56 md:h-64 xl:h-80"
                                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                  alt="" />
                              <div
                                  class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                  <p class="mb-4 text-lg font-bold text-gray-100">The Harvesters</p>
                                  <p class="text-sm tracking-wide text-gray-300">
                                      Bruegel’s fanfare for the common man is considered one of the defining
                                      works of Western art. This composition was one of six created on the
                                      theme of the seasons.
                                  </p>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </kinesis-container>
    </div>
</template>

<script>
    import {
        defineComponent
    } from 'vue'

    import {
        KinesisContainer,
        KinesisElement
    } from 'vue-kinesis'
    

    export default defineComponent({
        components: {
            KinesisContainer,
            KinesisElement,
        },
        
    })

</script>
