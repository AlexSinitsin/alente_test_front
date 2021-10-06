<template>
  <div class="select_props" v-on:click="updateSelect(paramSelectProps.sort)">
    {{paramSelectProps.name}}
  </div>
</template>

<script>
  export default {
    props: ['paramSelectProps'],
    methods: {
      updateSelect(param) {
        this.$store.commit('updateSelect', param)
        this.$store.commit('updateProducts')
      },
    }
  }

</script>

<style>
  .select_props {
    height: 40px;
    line-height: 20px;
    padding-left: 20px;
    padding-top: 12px;
    cursor: pointer;
  }

  .select_props:hover {
    color: #6F64F8;
  }

</style>
