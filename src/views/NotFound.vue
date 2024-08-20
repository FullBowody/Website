<template>
    <div class="flex flex-col grow justify-evenly items-center space-y-8">
        <CompIcon class="text-sky-500 h-20" />
        <div class="flex flex-col justify-center space-y-8 items-center">
            <CompCard class="m-4 p-4 space-y-4">
                <p class="text-xl font-semibold text-center">
                    <GetText :context="Lang.CreateTranslationContext('notfound', 'Title')" />
                </p>
                <p class="text-lg font-base text-center">
                    <GetText :context="Lang.CreateTranslationContext('notfound', 'Desc')" />
                </p>
            </CompCard>
            <CompBtnblock :onclick="goHome">
                <GetText :context="Lang.CreateTranslationContext('notfound', 'Back')" />
            </CompBtnblock>
        </div>
    </div>
</template>*

<script>
import Lang from '../scripts/Lang';
import GetText from '../components/text/GetText.vue';
import CompBtnblock from '../components/inputs/CompBtnblock.vue';
import CompIcon from '../components/CompIcon.vue';
import CompCard from '../components/cards/CompCard.vue';

export default {
    name: "NotFound",
    components: {
        CompCard,
        GetText,
        CompBtnblock,
        CompIcon,
        CompCard
    },
    data() {
        return {
            Lang
        };
    },
    mounted() {

    },
    methods: {
        goHome() {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>