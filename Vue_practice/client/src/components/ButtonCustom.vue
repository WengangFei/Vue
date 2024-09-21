<template>
    <button :class="style">
        {{ content }}
    </button>
</template>

<script>
    export default {
        data() {
            return {
                style: 
                `${this.bgColor}
                ${this.textColorName}
                text-sm
                m-1 
                px-2 
                py-1 
                rounded-md`
            }
        },
        props: {
            content: {
                type: String,
                required: true
            },
            bgColor: {
                type: String,
                required: true
            },
            textColorName: {
                type: String,
                required: true
            },

        }
    }
</script>

