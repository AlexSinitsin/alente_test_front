<template>
  <div class="slide">
    <div class="param">{{min + ' - ' + max}}</div>
    <div class="wrapper">
      <input type="range" id="cowbell" name="cowbell" :min="minValue" :max="maxValue" value="90" step="1" v-model.number="min" @change="changeRange(min, max)">
      <input type="range" id="cowbell" name="cowbell" :min="minValue" :max="maxValue"  value="90" step="1" v-model.number="max" @change="changeRange(min, max)">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      min: this.$store.state.slider.min,
      max: this.$store.state.slider.max
      }
    },
    computed: {
      minValue() {
        return this.$store.state.slider.min
      },
      maxValue() {
        return this.$store.state.slider.max
      }
    },
    methods: {
        changeRange(min, max) {
        this.$store.commit('updateSliderMin', min)
        this.$store.commit('updateSliderMax', max)
        this.$store.commit('updateProducts')
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
  position: relative}

  .slide input[type=range] {
    height: 10px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    padding-left: 0px;
    position: absolute;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: #6F64F8;
    border-radius: 5px;
  }

  input[type=range]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 30px;
    background: #6F64F8;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
    position: relative;
    z-index: 1000;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #6F64F8;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;

    background: #6F64F8;
    border-radius: 5px;
  }

  input[type=range]::-moz-range-thumb {
    border: 0px;
    height: 20px;
    width: 20px;
    border-radius: 30px;
    background: #6F64F8;
    cursor: pointer;
  }

</style>
