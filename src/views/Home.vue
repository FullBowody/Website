<template>
    <div class="flex grow flex-col min-h-full h-fit max-w-full w-full bg-slate-50 overflow-auto">
        <div class="flex h-fit w-full">
            <div class="flex relative w-full h-fit justify-center items-center mx-auto py-16 md:py-32">
                <div class="absolute w-full h-full">
                    <canvas id="3Dview"></canvas>
                </div>
                <div class="flex grow flex-col md:flex-row justify-center items-center z-50">
                    <comp-icon class="text-sky-500 h-24 md:h-32" />
                    <div class="flex h-full w-fit m-2 md:m-8 rounded-lg border-2 border-slate-200 dar:border-slate-600 bg-slate-50 dark:bg-slate-700">
                        <p class="text-4xl md:text-6xl font-bold text-sky-500 p-2">
                            FullBowody
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-slate-200 dark:bg-slate-700h h-fit min-h-full w-full">
            <div class="h-fit w-full justify-center p-4">
                <p class="text-center h-fit text-xl md:text-2xl font-semibold text-slate-500 p-2 italic">
                    Track your body with one or more basic cameras!
                </p>
            </div>
            <div class="h-fit w-full justify-center py-8 px-4">
                <p class="text-center h-fit text-xl md:text-2xl font-semibold text-slate-400 dark:text-slate-600 p-2 italic">
                    Sorry, this website is still under construction :/
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import CompIcon from '../components/CompIcon.vue';
import * as DDDview from '../scripts/3Dview.js';

export default {
    name: "HomeView",
    components: {
        CompIcon
    },
    data() {
        return {
            
        };
    },
    mounted() {
        DDDview.setup();
        DDDview.start();
    },
    methods: {
        
    }
}
</script>