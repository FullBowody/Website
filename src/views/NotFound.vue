<template>
    <div class="flex flex-col grow justify-evenly items-center space-y-8">
        <comp-icon class="text-sky-500 h-20" />
        <div class="flex flex-col justify-center space-y-8 items-center">
            <comp-card class="m-4 p-4 space-y-4">
                <p class="text-xl font-semibold text-center">
                    <get-text :context="Lang.CreateTranslationContext('notfound', 'Title')" />
                </p>
                <p class="text-lg font-base text-center">
                    <get-text :context="Lang.CreateTranslationContext('notfound', 'Desc')" />
                </p>
            </comp-card>
            <comp-btnblock :onclick="goHome">
                <get-text :context="Lang.CreateTranslationContext('notfound', 'Back')" />
            </comp-btnblock>
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