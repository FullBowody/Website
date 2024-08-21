<template>
    <div class="relative flex w-full h-full">
        <canvas id="bg-canvas" class="absolute w-full h-full" />
        <div ref="content" class="absolute flex flex-col h-full w-full overflow-auto">
            <div class="flex flex-col h-fit w-full">
                <div ref="part0" class="flex flex-col h-screen w-full justify-center items-center space-y-8">
                    <div class="show-up flex justify-center items-center space-x-8">
                        <img src="/img/transparent.png" alt="FullBowody Icon" class="w-32 h-32">
                        <p class="drop-shadow-xl text-8xl font-bold text-sky-500">
                            <GetText :context="Lang.CreateTranslationContext('home', 'Title')" />
                        </p>
                    </div>
                    <p class="show-up drop-shadow-xl text-2xl font-semibold">
                        <GetText :context="Lang.CreateTranslationContext('home', 'Subtitle')" />
                    </p>
                    <div class="show-down p-8">
                        <ButtonView @click="goDownload" :icon="ArrowDownTrayIcon">
                            <GetText :context="Lang.CreateTranslationContext('home', 'Download')" />
                        </ButtonView>
                    </div>
                </div>
                <div ref="part1" class="flex h-screen w-full justify-start items-center space-y-8 p-20">
                    <div class="flex flex-col max-w-[50%]">
                        <div class="show-right flex justify-center items-center p-6">
                            <p class="drop-shadow-xl text-6xl font-bold">
                                <GetText :context="Lang.CreateTranslationContext('home', 'StepNumber', {step: 1})" />
                            </p>
                        </div>
                        <div class="show-right flex flex-col bg-white dark:bg-slate-700 border-4 border-slate-200 dark:border-slate-600 rounded-xl shadow-xl p-8 justify-center items-center space-y-8">
                            <p class="text-4xl font-bold text-sky-500 text-center">
                                <GetText :context="Lang.CreateTranslationContext('home', 'PlaceCameras')" />
                            </p>
                            <p class="text-xl text-center">
                                <GetText class="flex flex-col space-y-4" :context="Lang.CreateTranslationContext('home', 'PlaceCamerasDesc')" />
                            </p>
                        </div>
                    </div>
                </div>
                <div ref="part2" class="flex h-screen w-full justify-end items-center space-y-8 p-20">
                    <div class="flex flex-col max-w-[50%]">
                        <div class="show-left flex justify-center items-center p-6">
                            <p class="drop-shadow-xl text-6xl font-bold">
                                <GetText :context="Lang.CreateTranslationContext('home', 'StepNumber', {step: 2})" />
                            </p>
                        </div>
                        <div class="show-left flex flex-col bg-white dark:bg-slate-700 border-4 border-slate-200 dark:border-slate-600 rounded-xl shadow-xl p-8 justify-center items-center space-y-8">
                            <p class="text-4xl font-bold text-sky-500 text-center">
                                <GetText :context="Lang.CreateTranslationContext('home', 'PlaceMarkers')" />
                            </p>
                            <p class="text-xl text-center">
                                <GetText class="flex flex-col space-y-4" :context="Lang.CreateTranslationContext('home', 'PlaceMarkersDesc')" />
                            </p>
                        </div>
                    </div>
                </div>
                <div ref="part3" class="flex flex-col h-screen w-full justify-center items-center space-y-8">
                    <div class="flex flex-col max-w-[50%]">
                        <div class="show-up flex justify-center items-center p-6">
                            <p class="drop-shadow-xl text-6xl font-bold">
                                <GetText :context="Lang.CreateTranslationContext('home', 'AllReady')" />
                            </p>
                        </div>
                        <div class="show-up flex flex-col bg-white dark:bg-slate-700 border-4 border-slate-200 dark:border-slate-600 rounded-xl shadow-xl p-8 justify-center items-center space-y-8">
                            <p class="text-4xl font-bold text-sky-500 text-center">
                                <GetText :context="Lang.CreateTranslationContext('home', 'StartTracking')" />
                            </p>
                            <p class="text-xl text-center">
                                <GetText class="flex flex-col space-y-4" :context="Lang.CreateTranslationContext('home', 'StartTrackingDesc')" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GetText from '@/components/GetText.vue';
import Lang from "@/scripts/Lang";
import { animateShows } from "@/scripts/common";
import ThreeView from "@/scripts/ThreeView";
import ThreeScene from "@/scripts/ThreeScene";
import CameraCurveController from "@/scripts/CameraCurveController";
import ButtonView from "@/components/ButtonView.vue";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

export default defineComponent({
    components: {
        GetText,
        ButtonView
    },
    data() {
        return {
            Lang,
            ArrowDownTrayIcon
        };
    },
    mounted() {
        animateShows(this.$el);
        const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
        if (!canvas) return;

        const threeView = ThreeView.Create(canvas);
        const controller = new CameraCurveController(threeView.camera, 10);
        controller.watchElementScroll(this.$refs["content"] as HTMLDivElement);
        controller.addPoint([4, 2.5, 0], [1, 0, 0], this.$refs["part0"] as HTMLDivElement);
        controller.addPoint([0.25, 1.2, -0.2], [0.25, 1, 1], this.$refs["part1"] as HTMLDivElement);
        controller.addPoint([-1.2, 1, -0.95], [-0.8, 0, 0.6], this.$refs["part2"] as HTMLDivElement);
        controller.addPoint([-1.5, 2, -1.5], [0, 0, 0], this.$refs["part3"] as HTMLDivElement);
        threeView.onUpdate((dt: number) => {
            controller.update(dt);
        });

        new ThreeScene(threeView.scene);
    },
    methods: {
        goDownload() {
            this.$router.push({ name: 'Download' });
        }
    }
});
</script>
