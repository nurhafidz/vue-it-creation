<template>
    <div class="">
            <kinesis-container event="scroll" class="flex h-full pt-24">
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

                    <div class="relative z-10 grid grid-cols-2 gap-6 row-gap-5 lg:grid-cols-3">
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
                        <a href="/#/artikel/detail">
                            <img class="object-cover w-full mb-3 rounded shadow-lg h-36 md:h-44 lg:h-48 xl:h-64"
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="" />
                            <p class="mb-2 text-xs text-gray-700 md:text-sm">
                                24 August 2021
                            </p>
                            <p class="mb-2 text-base font-bold leading-none sm:text-xl md:text-2xl">
                                A slice of heaven
                            </p>
                            <p class="mb-2 text-sm text-gray-700 md:text-base">
                                O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind
                                the
                                bicycle shed, Hercules Morse.
                            </p>
                            <div class="flex flex-row mb-2 text-xs text-gray-700 lg:text-sm">
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
