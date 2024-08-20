<template>
    <div class="relative flex w-full h-full">
        <canvas id="bg-canvas" class="absolute w-full h-full" />
        <div ref="content"class="absolute flex flex-col h-full w-full overflow-auto">
            <div class="flex flex-col h-fit w-full">
                <div ref="part0" class="flex flex-col h-screen w-full justify-center items-center space-y-8">
                    <div class="flex justify-center items-center space-x-8">
                        <img src="/img/transparent.png" alt="FullBowody Icon" class="w-32 h-32">
                        <p class="text-8xl font-bold text-sky-500">FullBowody</p>
                    </div>
                    <p class="text-2xl font-semibold text-slate-200">Traquez votre corps en temps réel avec de simples caméras !</p>
                </div>
                <div ref="part1" class="flex flex-col h-screen w-full justify-center items-center space-y-8">
                    <div class="flex justify-center items-center space-x-8">
                        <img src="/img/transparent.png" alt="FullBowody Icon" class="w-32 h-32">
                        <p class="text-8xl font-bold text-sky-500">FullBowody</p>
                    </div>
                    <p class="text-2xl font-semibold text-slate-200">Traquez votre corps en temps réel avec de simples caméras !</p>
                </div>
                <div ref="part2" class="flex flex-col h-screen w-full justify-center items-center space-y-8">
                    <div class="flex justify-center items-center space-x-8">
                        <img src="/img/transparent.png" alt="FullBowody Icon" class="w-32 h-32">
                        <p class="text-8xl font-bold text-sky-500">FullBowody</p>
                    </div>
                    <p class="text-2xl font-semibold text-slate-200">Traquez votre corps en temps réel avec de simples caméras !</p>
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
import { API } from "@/scripts/API";
import ROUTES from "@/scripts/routes";
import ThreeView from "@/scripts/ThreeView";
import ThreeScene from "@/scripts/ThreeScene";
import CameraCurveController from "@/scripts/CameraCurveController";

export default defineComponent({
    components: {
        GetText
    },
    data() {
        return {
            Lang
        };
    },
    mounted() {
        // animateShows(this.$el);
        const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
        if (!canvas) return;

        const threeView = new ThreeView(canvas);
        const controller = new CameraCurveController(threeView.camera, 10);
        controller.watchElementScroll(this.$refs["content"] as HTMLDivElement);
        controller.addPoint([6, 3, 0], [2, 0, 0], this.$refs["part0"] as HTMLDivElement);
        controller.addPoint([4, 2, 0], [0, 0, 0], this.$refs["part1"] as HTMLDivElement);
        controller.addPoint([2, 1, 2], [0, 0, 0], this.$refs["part2"] as HTMLDivElement);
        threeView.onUpdate(dt => {
            controller.update(dt);
        });

        new ThreeScene(threeView.scene);
    },
    methods: {
        
    }
});
</script>
