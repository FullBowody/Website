<template>
    <button class="flex space-x-2 justify-center items-center rounded-lg p-2 bg-slate-200 dark:bg-slate-600 border-2 border-slate-200 dark:border-slate-600"
        :class="disabled ? 'opacity-75 cursor-default' : 'hover:border-slate-400 hover:dark:border-slate-500 transition-all'">
        <component v-if="icon" :is="icon" class="w-6 h-6" />
        <p class="text-base font-semibold px-1"> <slot /> </p>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        
    },
    props: {
        icon: {
            type: [Object, Function],
            required: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup() {
        return {
            
        }
    },
    mounted() {
        
    }
});
</script>
