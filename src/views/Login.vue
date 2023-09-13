<template>
    <div class="flex flex-col grow justify-evenly items-center space-y-8">
        uwu
    </div>
</template>

<script>
import Lang from '../scripts/Lang';
import User from '../scripts/User';
import API from '../scripts/API';

import 'https://cdn.furwaz.fr/api/portal.min.js';

export default {
    name: "LoginVue",
    components: {
        
    },
    data() {
        return {
            Lang,
            User,
            mode: 'login'
        };
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>