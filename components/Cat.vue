<template>
  <div class="cat_props" :class="paramCatProps.checked" v-on:click="updateCheckedCat(paramCatProps)">
    <div >{{paramCatProps.name}}</div>
    <div class="count">{{paramCatProps.count}}</div>
  </div>
</template>

<script>
  export default {
    props: ['paramCatProps'],
    methods: {
    updateCheckedCat(param) {
      this.$store.commit('updateCheckedCat', param.id)
    },
    }
  }

</script>

<style>
.cat_props{
    padding-left: 25px;
    position: relative;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
  }
  .cat_props .count {
    font-weight: 300;
font-size: 14px;
  }

  .cat_props:before {
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

  .cat_props.checked:before{
    background: #6F64F8;
    border: 1px solid #6F64F8;
  }
</style>
