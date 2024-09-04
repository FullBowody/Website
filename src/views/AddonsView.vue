<template>
    <div class="flex max-h-full w-full min-h-0 h-full space-y-8 overflow-auto pt-16">
        <div class="flex flex-col w-full h-fit min-h-full justify-center items-center">
            <div class="flex w-full h-fit justify-center items-center">
                <h1 class="show-up text-4xl font-bold p-12">
                    <GetText :context="Lang.CreateTranslationContext('addons', 'Title')" />
                </h1>
            </div>
            <div class="flex grow">
                <div class="flex flex-wrap w-fit justify-center">
                    <AddonView v-for="(addon, index) in addons" :key="addon.id" :addon="addon" class="show-up m-4 h-fit w-fit" :style="`animation-delay: ${index+1}00ms`" />
                </div>
            </div>
        </div>
    </div>
</template>*

<script lang="ts">
import { defineComponent } from 'vue';
import Lang from '@/scripts/Lang';
import { API } from '@/scripts/API';
import ROUTES from '@/scripts/routes';
import AddonView from '@/components/AddonCard.vue';
import GetText from '@/components/GetText.vue';

export default defineComponent({
    name: "NotFound",
    components: {
        AddonView,
        GetText
    },
    data() {
        return {
            Lang,
            addons: [] as any[]
        };
    },
    mounted() {
        this.fetchAddons();
    },
    methods: {
        async fetchAddons() {
            const res = await API.Request(ROUTES.ADDONS.GET());
            if (res.error) {
                console.error(res.error);
                return;
            }

            this.addons = res.data.products;
        }
    }
});
</script>