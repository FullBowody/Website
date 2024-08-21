<template>
    <div class="relative flex grow bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 min-w-0 max-w-full">
        <div class="z-50 absolute top-0 left-0 right-0 h-fit w-full">
            <HeaderView />
        </div>
        <div class="flex grow overflow-x-hidden overflow-y-auto">
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import HeaderView from "./components/HeaderView.vue";

export default defineComponent({
    components: {
        HeaderView,
        RouterView
    },
    data() {
        return {
            lastScroll: 0
        }
    },
    setup() {
        
    },
    mounted() {
        
    }
});
</script>

<style>
</style>