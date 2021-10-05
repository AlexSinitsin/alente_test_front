<template>
  <div class="brand_props" :class="paramBrandProps.checked" v-on:click="updateCheckedBrand(paramBrandProps)">
    <div >{{paramBrandProps.title}}</div>
    <div class="count">{{paramBrandProps.count}}</div>
  </div>
</template>

<script>
  export default {
    props: ['paramBrandProps'],
    methods: {
    updateCheckedBrand(param) {
      this.$store.commit('updateCheckedBrand', param.id)
    },
    }
  }

</script>

<style>
.brand_props{
    padding-left: 25px;
    position: relative;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
  }
  .brand_props .count {
    font-weight: 300;
font-size: 14px;
  }

  .brand_props:before {
    content: '';
    position: absolute;
    display: block;
    width: 17px;
    height: 17px;
    border: 1px solid #979797;
    background: transparent;
    left: 0px;
    top: 6px;
    border: 1px solid #999999;
box-sizing: border-box;
border-radius: 3px;
  }

  .brand_props.checked:before{
    background: #6F64F8;
    border: 1px solid #6F64F8;
  }
</style>
