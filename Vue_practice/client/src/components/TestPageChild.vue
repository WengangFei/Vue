<template>
    <div>
    Props: {{ parent.name }}
    Props age: {{ parent.age }} 
    <slot />
    <slot name="child"></slot>
    <slot name="child2"></slot>
    <slot name="scopedSlot" :child="child"></slot>
    </div>
</template>

<script>
    export default {
        props: ['parent'],
        data() {
            return {
                child:{
                    group:'Children',
                    color:'Yellow'
                }
            }
        }
    }
</script>
