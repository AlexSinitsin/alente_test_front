<template>
<div>
<h5>Filter</h5>
<div class="filter">
    <div class="filter_block range">
     <h6>Multi Range</h6>
     <Range v-for="param in range" :key="param.id" :paramRangeProps="param"/>
    </div>
    <div class="filter_block slider">
    <h6>Slider</h6>
      <Slider />
    </div>
    <div class="filter_block cat">
    <h6>Category</h6>
      <Cat v-for="param in category" :key="param.id" :paramCatProps="param" />
    </div>
    <div class="filter_block brand">
    <h6>Brand</h6>
      <Brand v-for="param in brand" :key="param.id" :paramBrandProps="param" />
    </div>
    <div class="filter_block rating">
        <h6>Rating</h6>
       <Rating v-for="param in rating" :key="param.count" :paramRatingProps="param" />
    </div>
  </div>
</div>
</template>

<script>
import Range from '~/components/Range.vue'
import Cat from '~/components/Cat.vue' 
import Brand from '~/components/Brand.vue'
import Rating from '~/components/Rating.vue'
import Slider from '~/components/Slider.vue' 
export default {
  components: { Range, Cat, Brand, Rating, Slider },
  props: ['paramRangePrors','paramCatPrors','paramBrandPrors', 'paramRatingPrors'],
  computed: {
    range() {
      return this.$store.state.range
    },
    category() {
      return this.$store.state.categories
    },
    brand() {
      return this.$store.state.brands
    },
    rating() {
      return this.$store.state.rating
    },
  },
}
</script>

<style>
h5 {
  font-weight: normal;
font-size: 18px;
line-height: 21px;
margin-bottom: 20px;
}
 h6 {
   font-weight: 600;
font-size: 18px;
line-height: 22px;
margin-bottom: 23px;
 }
 .filter {
   padding: 28px;
   background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
 }
 .range, .cat, .slider, .brand {
   border-bottom: 1px solid #D6D6D6;
   margin-bottom: 34px;
   padding-bottom: 32px;
 }
  
</style>