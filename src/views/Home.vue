<template>
    <div class="flex grow flex-col min-h-full max-h-full h-fit max-w-full w-full bg-slate-200">
        <div class="flex h-fit w-full">
            <div class="flex h-fit justify-center items-center my-32 mx-auto">
                <comp-icon class="text-sky-500 h-32" />
                <div class="flex h-full w-fit m-8">
                    <p class="text-6xl font-bold text-sky-500">
                        FullBowody
                    </p>
                </div>
            </div>
        </div>
        <div class="flex grow bg-slate-50 m-2 rounded-lg">

        </div>
    </div>
</template>

<script>
import CompIcon from '../components/CompIcon.vue';

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
        
    },
    methods: {
        
    }
}
</script>