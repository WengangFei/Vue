<template>
    <div>
        <!-- option API global var $route -->
        <h1 class="text-red-500 font-bold">Single name details: {{  user[0] }}</h1>
    </div>
</template>

<script setup>
import { userList } from '@/composable/useUsers.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = userList.value.filter(item=>item.url.split('/')[item.url.split('/').length-2] === route.params.id);


</script>