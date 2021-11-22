<template>
    <p v-if="errors[field]" class="text-xs text-red-500 mt-2">{{errors[field][0]}}</p>
</template>

<script>
export default {
    props:['errors','field']
}
</script>

<style>

</style>
