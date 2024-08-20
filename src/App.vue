<template>
    <div class="flex grow bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 min-w-0 max-w-full">
        <div class="flex grow overflow-x-hidden overflow-y-auto">
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
    components: {
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