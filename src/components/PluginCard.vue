<template>
    <div class="flex flex-col space-y-4 p-4 border-2 border-slate-600 rounded-md shadow-xl max-w-[26em]">
        <div class="flex space-x-4 justify-start items-center">
            <div class="flex bg-slate-800 rounded-md p-1">
                <Square2StackIcon class="w-8 h-8" />
            </div>
            <p class="text-xl font-bold">
                {{ plugin.name }}
            </p>
        </div>
        <div>
            <p class="text-md font-medium">
                {{ plugin.description }}
            </p>
        </div>
        <span class="flex w-full h-1 rounded-full bg-slate-600" />
        <div class="flex justify-between items-center space-x-8">
            <p class="bg-slate-600 p-1 px-3 rounded-md text-lg font-semibold"> {{ plugin.price }} € </p>
            <ButtonView @click="purchasePlugin(plugin.id)" :icon="ShoppingCartIcon">
                Acheter
            </ButtonView>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ShoppingCartIcon, Square2StackIcon } from '@heroicons/vue/24/outline';
import ButtonView from './ButtonView.vue';

export default defineComponent({
    name: "PluginCard",
    components: {
        Square2StackIcon,
        ButtonView
    },
    props: {
        plugin: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            ShoppingCartIcon
        };
    },
    methods: {
        purchasePlugin(id: number) {
            const url = `https://store.furwaz.com/order/${id}`;
            window.open(url, '_blank');
        }
    }
});
</script>