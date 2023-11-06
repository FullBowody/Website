<template>
    <div class="flex grow flex-col min-h-full h-fit max-w-full w-full overflow-auto">
        <div class="flex h-fit w-full">
            <div class="flex relative w-full h-fit justify-center items-center mx-auto py-16 md:py-32 bg-white dark:bg-slate-800 ">
                <div class="absolute w-full h-full">
                    <canvas id="3Dview"></canvas>
                </div>
                <div class="flex grow flex-col md:flex-row justify-center items-center z-50">
                    <comp-icon class="text-sky-500 h-24 md:h-32" />
                    <div class="flex h-full w-fit m-2 md:m-8 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700">
                        <p class="text-4xl md:text-6xl font-bold text-sky-500 p-2 md:pb-4">
                            FullBowody
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col h-fit w-full space-y-8 px-4 py-16 sm:px-16 md:px-15 lg:px-20 md:py-40 md:space-y-40">
            <div id="section-1" class="show-right flex w-full min-h-fit h-full">
                <div class="w-full md:w-2/3 h-full min-h-fit p-4 md:p-10 lg:p-20 md:pl-16 lg:pl-32">
                    <div class="relative bg-white dark:bg-slate-800 rounded-xl h-fit shadow-2xl shadow-slate-300 dark:shadow-slate-800">
                        <div class="flex justify-center items-center absolute -top-6 md:-top-12 -left-6 md:-left-12 h-12 md:h-24 w-12 md:w-24 bg-slate-100 dark:bg-slate-600 rounded-xl border-2 border-slate-300 dark:border-slate-500 shadow-lg shadow-slate-300 dark:shadow-slate-700">
                            <p class="text-2xl md:text-5xl font-semibold text-slate-600 dark:text-slate-50">
                                1
                            </p>
                        </div>
                        <div class="h-fit p-4 md:p-16 space-y-4">
                            <p class="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
                                <get-text :context="Lang.CreateTranslationContext('home', 'ConnectCamera')" />
                            </p>
                            <div class="text-lg md:text-xl font-base text-slate-500 dark:text-slate-400">
                                <get-text
                                    class="space-y-2"
                                    :context="Lang.CreateTranslationContext('home', 'ConnectCameraDesc')"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:flex justify-center items-center w-1/3 h-full">
                    <div class="icon-shadow">
                        <camera-icon class="rotate3D-right-1 h-48 lg:h-56" />
                    </div>
                </div>
            </div>

            <div id="section-2" class="show-left flex w-full min-h-fit h-full">
                <div class="hidden md:flex justify-center items-center w-1/3 h-full">
                    <div class="icon-shadow">
                        <bolt-icon class="rotate3D-right-2 h-48 lg:h-56" />
                    </div>
                </div>
                <div class="w-full md:w-2/3 h-full min-h-fit p-4 md:p-10 lg:p-20 md:pr-16 lg:pr-32">
                    <div class="relative bg-white dark:bg-slate-800 rounded-xl h-fit shadow-2xl shadow-slate-300 dark:shadow-slate-800">
                        <div class="flex justify-center items-center absolute -top-6 md:-top-12 -right-6 md:-right-12 h-12 md:h-24 w-12 md:w-24 bg-slate-100 dark:bg-slate-600 rounded-xl border-2 border-slate-300 dark:border-slate-500 shadow-lg shadow-slate-300 dark:shadow-slate-700">
                            <p class="text-2xl md:text-5xl font-semibold text-slate-600 dark:text-slate-50">
                                2
                            </p>
                        </div>
                        <div class="h-fit p-4 md:p-16 space-y-4">
                            <p class="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
                                <get-text :context="Lang.CreateTranslationContext('home', 'TrackBody')" />
                            </p>
                            <div class="text-lg md:text-xl font-base text-slate-500 dark:text-slate-400">
                                <get-text
                                    class="space-y-2"
                                    :context="Lang.CreateTranslationContext('home', 'TrackBodyDesc')"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="section-3" class="show-right flex w-full min-h-fit h-full">
                <div class="w-full md:w-2/3 h-full min-h-fit p-4 md:p-10 lg:p-20 md:pl-16 lg:pl-32">
                    <div class="relative bg-white dark:bg-slate-800 rounded-xl h-fit shadow-2xl shadow-slate-300 dark:shadow-slate-800">
                        <div class="flex justify-center items-center absolute -top-6 md:-top-12 -left-6 md:-left-12 h-12 md:h-24 w-12 md:w-24 bg-slate-100 dark:bg-slate-600 rounded-xl border-2 border-slate-300 dark:border-slate-500 shadow-lg shadow-slate-300 dark:shadow-slate-700">
                            <p class="text-2xl md:text-5xl font-semibold text-slate-600 dark:text-slate-50">
                                3
                            </p>
                        </div>
                        <div class="h-fit p-4 md:p-16 space-y-4">
                            <p class="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
                                <get-text :context="Lang.CreateTranslationContext('home', 'LinkFullbowody')" />
                            </p>
                            <div class="text-lg md:text-xl font-base text-slate-500 dark:text-slate-400">
                                <get-text
                                    class="space-y-2"
                                    :context="Lang.CreateTranslationContext('home', 'LinkFullbowodyDesc')"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:flex justify-center items-center w-1/3 h-full">
                    <div class="icon-shadow">
                        <link-icon class="rotate3D-right-3 h-48 lg:h-56" />
                    </div>
                </div>
            </div>

            <div id="section-4" class="show-left flex w-full min-h-fit h-full">
                <div class="hidden md:flex justify-center items-center w-1/3 h-full">
                    <div class="icon-shadow">
                        <video-camera-icon class="rotate3D-right-4 h-48 lg:h-56" />
                    </div>
                </div>
                <div class="w-full md:w-2/3 h-full min-h-fit p-4 md:p-10 lg:p-20 md:pr-16 lg:pr-32">
                    <div class="relative bg-white dark:bg-slate-800 rounded-xl h-fit shadow-2xl shadow-slate-300 dark:shadow-slate-800">
                        <div class="flex justify-center items-center absolute -top-6 md:-top-12 -right-6 md:-right-12 h-12 md:h-24 w-12 md:w-24 bg-slate-100 dark:bg-slate-600 rounded-xl border-2 border-slate-300 dark:border-slate-500 shadow-lg shadow-slate-300 dark:shadow-slate-700">
                            <p class="text-2xl md:text-5xl font-semibold text-slate-600 dark:text-slate-50">
                                4
                            </p>
                        </div>
                        <div class="h-fit p-4 md:p-16 space-y-4">
                            <p class="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
                                <get-text :context="Lang.CreateTranslationContext('home', 'PlayEverything')" />
                            </p>
                            <div class="text-lg md:text-xl font-base text-slate-500 dark:text-slate-400">
                                <get-text
                                    class="space-y-2" 
                                    :context="Lang.CreateTranslationContext('home', 'PlayEverythingDesc')"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-fit w-full p-20 text-sky-500 space-y-8">
            <div class="flex justify-center items-center w-full h-fit">
                <arrow-down-tray-icon class="h-16 md:h-32 icon-shadow" />
            </div>

            <div class="flex justify-center items-center w-full h-fit">
                <p class="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
                    <get-text :context="Lang.CreateTranslationContext('home', 'ReadyQuestion')" />
                </p>
            </div>

            <div class="flex p-8 justify-center">
                <div class="flex w-fit flex-col items-center rounded-xl py-8 px-12 bg-white dark:bg-slate-800 shadow-xl shadow-slate-300 dark:shadow-slate-800 space-y-8">
                    <p class="text-center text-2xl md:text-4xl font-semibold text-sky-500">
                        <get-text :context="Lang.CreateTranslationContext('home', 'DownloadFullbowody')" />
                    </p>
                    <div class="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-x-12 md:space-y-0">
                        <div
                            v-for="download in downloads"
                            :key="download.platform"
                            class="px-12 py-8 rounded-lg bg-slate-100 dark:bg-slate-700 border-2"
                            :class="platform === download.platform ? 'border-sky-500' : 'border-slate-200 dark:border-slate-600'"
                        >
                            <div
                                class="flex justify-center"
                                :class="platform === download.platform ? 'text-sky-500' : 'text-slate-700 dark:text-slate-200'"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" :viewBox="download.viewbox" class="h-20" fill="currentColor">
                                    <path :d="download.path" />
                                </svg>
                            </div>
                            <p class="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 text-center">
                                {{ download.name }}
                            </p>
                            <div class="flex pt-16">
                                <comp-btnblock
                                    :disabled="!download.link"
                                    @click="startDownload(download.link)"
                                >
                                    <get-text :context="Lang.CreateTranslationContext('home', 'Download')" />
                                </comp-btnblock>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompIcon from '../components/CompIcon.vue';
import CompBtnblock from '../components/inputs/CompBtnblock.vue';
import GetText from '../components/text/GetText.vue';
import * as DDDview from '../scripts/3Dview.js';
import { animateShows } from '../scripts/common';
import Lang from '../scripts/Lang';

import {
    CameraIcon,
    BoltIcon,
    LinkIcon,
    VideoCameraIcon,
    ArrowDownTrayIcon
} from '@heroicons/vue/24/outline';

const downloads = [
    {
        platform: 'windows',
        name: 'Windows',
        viewbox: '0 0 448 512',
        path: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z",
        link: "https://cdn.furwaz.fr/fullbowody/FullBowody-0.1.0-Setup.exe"
    },
    {
        platform: 'macos',
        name: 'MacOS',
        viewbox: '0 0 384 512',
        path: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
    },
    {
        platform: 'linux',
        name: 'Linux',
        viewbox: '0 0 448 512',
        path: "M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"
    },
];

export default {
    name: "HomeView",
    components: {
        CompIcon,
        CompBtnblock,
        CameraIcon,
        BoltIcon,
        LinkIcon,
        VideoCameraIcon,
        ArrowDownTrayIcon,
        GetText
    },
    data() {
        return {
            Lang,
            platform: this.getPlatformFromUserAgent(),
            downloads
        };
    },
    mounted() {
        DDDview.setup();
        DDDview.start();
        animateShows(this.$el);
        this.$el.addEventListener('scroll', ev => {
            const sections = [
                this.$el.querySelector('#section-1'),
                this.$el.querySelector('#section-2'),
                this.$el.querySelector('#section-3'),
                this.$el.querySelector('#section-4')
            ];
            sections.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const middle = Math.max(Math.min(window.innerHeight, rect.top + rect.height / 2), 0);
                    const ratio = 1 - 2 * (middle / window.innerHeight);
                    this.$el.style.setProperty('--scroll-' + (index+1), ratio);
                }
            });
        });
    },
    methods: {
        getPlatformFromUserAgent() {
            const ua = navigator.userAgent;
            if (ua.includes('Win')) return 'windows';
            if (ua.includes('Mac')) return 'macos';
            if (ua.includes('Linux')) return 'linux';
            return 'unknown';
        },
        startDownload(link) {
            if (link) {
                window.open(link, '_blank');
            }
        }
    }
}
</script>