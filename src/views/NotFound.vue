<template>
    <div class="flex flex-col grow justify-evenly items-center space-y-8">
        <div class="flex flex-col justify-center space-y-8 items-center">
            <p class="text-xl font-semibold text-center">
                    <GetText :context="Lang.CreateTranslationContext('notfound', 'Title')" />
            </p>
            <p class="text-lg font-base text-center">
                <GetText :context="Lang.CreateTranslationContext('notfound', 'Desc')" />
            </p>
            <ButtonView @click="goHome">
                <GetText :context="Lang.CreateTranslationContext('notfound', 'Back')" />
            </ButtonView>
        </div>
    </div>
</template>*

<script>
import Lang from '../scripts/Lang';
import GetText from '../components/GetText.vue';
import ButtonView from '../components/ButtonView.vue';

export default {
    name: "NotFound",
    components: {
        GetText,
        ButtonView
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