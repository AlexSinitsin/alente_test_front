<template>
  <div class="slide" >
    <div class="param">{{leftX + ' - ' + value(false)}}</div>
    <div class="wrapper">
      <div class="back">
        <div class="input leftInput" v-on:mousedown="move" :style="position('left')"></div>
        <div class="input rightInput" v-on:mousedown="updateSlider" :style="position('right')"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      leftX() {
        return this.$store.state.slider.X;
      }
    },
    methods: {
      position(n) {
        return n + ': ' + this.$store.state.slider.X + 'px';
      },
      value(n) {
        const range = this.$store.state.slider.max - this.$store.state.slider.min;
        const Stap = Math.ceil(100 / range)
        return n ? this.$store.state.slider.min + Math.ceil(this.$store.state.slider.X / Stap) : this.$store.state
          .slider.max + Math.ceil(this.$store.state.slider.X / Stap)
      },
      updateSlider(event) {
        const x = event.pageX
        console.log(event.pageX)
        this.$store.commit('updateSlider', x)
        this.$store.commit('updateProducts')
      },
      updateXSlider(event) {
        const x = event.pageX - this.$store.state.slider.defaultX
        console.log('#' + x)
        this.$store.commit('updateXSlider', x)
        this.$store.commit('updateProducts')
      },
      move (e) {
    	e.target.addEventListener('mousemove', function(e) {
            const x = e.pageX
        console.log(e.pageX)
        this.$store.commit('updateSlider', x)
        })
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
