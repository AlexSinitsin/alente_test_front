<template>
  <div class="range_props" :class="paramRangeProps.checked" v-on:click="updateCheckedRange(paramRangeProps)">
    <div >{{paramRangeProps.name}}</div>
    <div class="count">{{paramRangeProps.count}}</div>
  </div>
</template>

<script>
  export default {
    props: ['paramRangeProps'],
    methods: {
    updateCheckedRange(param) {
      this.$store.commit('updateCheckedRange', param.id)
    },
    }
  }

</script>

<style>
  .range_props {
    padding-left: 25px;
    position: relative;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
  }
  .range_props .count {
    font-weight: 300;
font-size: 14px;
  }

  .range_props:before {
    content: '';
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid #979797;
    background: transparent;
    border-radius: 30px;
    left: 0px;
    top: 6px;
  }

  .range_props.checked:before{
    background: #6F64F8;
    border: 1px solid #6F64F8;
  }
</style>
