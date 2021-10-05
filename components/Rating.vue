<template>
  <div class="rating_props">
    <div class="stars"><span :class="{'star-active': checkRating(n, paramRatingProps.countStars)}" v-for="n in 5" :key="n"><img src="img/star.svg" alt="star"></span></div>
    <div class="count">{{paramRatingProps.count}}</div>
  </div>
</template>

<script>
  export default {
    props: ['paramRatingProps'],
    methods: {
      checkRating(n, countStars) {
        return countStars - n >= 0;
      },
    }
  }

</script>

<style>
  .rating_props {
    position: relative;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
  }

  .rating_props .count {
    font-weight: 300;
    font-size: 14px;
  }
 .rating_props .stars span {
     display: inline-block;
     width: 18px;
     height: 18px;
     filter: saturate(0%);
     margin-right: 10px;
 }
 .rating_props .stars span img {
     width: 100%
 }
 .rating_props .stars span.star-active {
     filter: saturate(100%);
 }
  

</style>
