<template>
  <div class="slide" >
   
  </div>
</template>

<script>

import Slider from '@vueform/slider/dist/slider.vue2.js'
 export default {
    components: {
      Slider,
    },
    data() {
      return {
        value: 20
      }
    }
  }

</script>

<style>
  .slide {
    height: 20px;
    position: relative;
  }

  .param {
    position: absolute;
    top: -45px;
    right: 0px;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
  }

  .wrapper {
    width: 100%;
    position: relative;
    height: 10px;
    top: 5px;
    background: #6F64F8;
  }

  .input {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -5px;
    background: #6F64F8;
    border-radius: 30px;
  }

</style>
