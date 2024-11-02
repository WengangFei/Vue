<template>
    <div>
        <div v-if="data?.length > 0" v-for="item in data" :key="item.id">
            {{ item.first_name }}
            {{ item.last_name }}
        </div>
        <div v-else>No data</div>
    </div>
</template>

<script>
    export default {
        // name: "FetchDataFromDB",
        props: {
            data: Array,
            required: true,
        },

    }
</script>

<style lang="scss" scoped>

</style>