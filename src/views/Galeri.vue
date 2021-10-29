<template>
    <div class="">
            <kinesis-container event="scroll" class="flex h-full pt-24">
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
                        <div
                            class="grid grid-cols-3 gap-2 row-gap-3 mb-8 lg:gap-6 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-3">
                            <a @click="openModal(2,$event)" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-64 xl:h-80"
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
                                    <img class="object-cover w-full h-32 md:h-64 xl:h-80"
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
                                    <img class="object-cover w-full h-32 md:h-64 xl:h-80"
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
                            <a href="/" class="row-span-1" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-48 xl:h-80"
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
                            <a @click="openModal(1,$event)" class="col-span-2 row-span-2 mt-1 md:mt-0"
                                aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-64 md:h-96 xl:h-2x80"
                                        src="http://www.vjasbuilding.com.au/wp-content/uploads/2014/12/Vera-4-commercial-work-1080.jpg"
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
                            <a href="/" class="row-span-1" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-48 xl:h-80"
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
                            <a href="/" class="" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-48 xl:h-80"
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
                            <a href="/" class="" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-48 xl:h-80"
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
                            <a href="/" class="" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-48 xl:h-80"
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
                            <a @click="openModal(1,$event)" class="col-span-2 row-span-2 mt-1 md:mt-0"
                                aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-64 md:h-96 xl:h-2x80"
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
                            <a href="/" class="" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-48 xl:h-80"
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
                            <a href="/" class="" aria-label="View Item">
                                <div
                                    class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img class="object-cover w-full h-32 md:h-48 xl:h-80"
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

                        </div>
                    </div>
                </div>
            </kinesis-container>


            <TransitionRoot appear :show="isOpen" as="template">
                <Dialog as="div" @close="closeModal">
                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="min-h-screen px-4 text-center">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <DialogOverlay class="fixed inset-0" />
                            </TransitionChild>

                            <span class="inline-block h-screen align-middle" aria-hidden="true">
                                &#8203;
                            </span>

                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                                <div
                                    class="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                        <div class="flex flex-row">
                                            <div class="w-1/2">
                                            </div>
                                            <div class="flex justify-end w-1/2">
                                                <button type="button" class="text-red-500 hover:text-red-700" @click="closeModal">X</button>
                                            </div>
                                        </div>

                                    </DialogTitle>
                                    <div class="mt-2">
                                        <splide :options="options">
                                            <splide-slide>
                                                <img
                                                v-bind:src="imagePath">
                                            </splide-slide>
                                            <splide-slide>
                                                <div class="relative">
                                                    <img
                                                        v-bind:src="imagePath">
                                                    <div
                                                        class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-100">
                                                        <p class="mb-4 text-lg font-bold text-gray-100">{{myData.title}}</p>
                                                        <p class="text-sm tracking-wide text-gray-300">
                                                            {{myData.desc}}
                                                        </p>
                                                    </div>
                                                </div>
                                            </splide-slide>
                                        </splide>
                                    </div>


                                </div>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>


    </div>

</template>
<script>
    import {
        defineComponent,
        ref
    } from 'vue'
    import {
        KinesisContainer,
        KinesisElement
    } from 'vue-kinesis'
    import {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionRoot,
        TransitionChild
    } from "@headlessui/vue";
    import {
        Splide,
        SplideSlide
    } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';

    export default defineComponent({
        components: {
            KinesisContainer,
            KinesisElement,
            Dialog,
            DialogOverlay,
            DialogTitle,
            TransitionRoot,
            TransitionChild,
            Splide,
            SplideSlide,

        },
        data() {
            return {
                myData: 0,
                options: {
                    rewind: true,
                    gap: '1rem',
                },
            };
        },
        setup() {
            const isOpen = ref(false)
            return {
                isOpen,
                closeModal() {
                    isOpen.value = false
                },
                openModal(event) {
                    isOpen.value = true
                    this.axios
                        .get('http://localhost:3000/api/image/'+event)
                        .then(response => (this.myData = response.data))
                    console.log(this.myData)


                },
            }
        },
        computed: {
            imagePath() {
                return `${this.myData.image}`
            }
        }
    })

</script>
