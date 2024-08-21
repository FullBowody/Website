<template>
    <button class="flex space-x-2 justify-center items-center rounded-lg p-2 border-2 border-slate-600 bg-slate-600 text-slate-200
                   hover:border-slate-500 transition-all">
        <component v-if="icon" :is="icon" class="w-6 h-6 text-slate-200" />
        <p class="text-base px-1"> <slot /> </p>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        
    },
    props: {
        icon: {
            type: Object,
            required: false
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
