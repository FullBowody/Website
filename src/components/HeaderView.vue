<template>
    <div class="flex bg-white dark:bg-slate-700 border-b-4 border-slate-200 dark:border-slate-600 shadow-xl justify-start items-center p-2 space-x-16">
        <RouterLink to="/" class="flex space-x-2 justify-center items-center">
            <img src="/img/transparent.png" alt="FullBowody Icon" class="w-10 h-10">
            <p class="text-xl font-bold text-sky-500"> FullBowody </p>
        </RouterLink>
        <div class="hidden md:flex space-x-8">
            <RouterLink v-for="link in links" :key="link.name" :to="link.href"
                class="flex space-x-2 justify-center items-center rounded-lg p-2 border-2"
                :class="linkSelected(link)? 'border-slate-600' : 'border-transparent'">
                <component :is="link.icon" class="w-6 h-6" />
                <p class="text-base px-1">
                    <GetText :context="Lang.CreateTranslationContext('header', link.name)" />
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import GetText from '@/components/GetText.vue';
import Lang from '@/scripts/Lang';

import {
    ArrowDownTrayIcon,
    HomeIcon,
    NewspaperIcon,
    SquaresPlusIcon
} from '@heroicons/vue/24/outline';

export default defineComponent({
    components: {
        RouterLink,
        GetText
    },
    setup() {
        return {
            Lang,
            links: [
                {
                    name: 'Home',
                    icon: HomeIcon,
                    href: '/'
                },
                {
                    name: 'Addons',
                    icon: SquaresPlusIcon,
                    href: '/addons'
                },
                {
                    name: 'Download',
                    icon: ArrowDownTrayIcon,
                    href: '/download'
                },
                {
                    name: 'About',
                    icon: NewspaperIcon,
                    href: '/about'
                }
            ]
        }
    },
    watch: {
        $route() {
            this.$forceUpdate();
        }
    },
    methods: {
        linkSelected(link: {href: string}) {
            return window.location.pathname === link.href;
        }
    }
});
</script>