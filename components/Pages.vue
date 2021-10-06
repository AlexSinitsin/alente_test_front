<template>
  <div class="pages">
  <div :href="'pages/' + (currentPage - 1)" class="prev" v-if="currentPage >= 2" @click="updatePageCurrent(currentPage - 1)"></div>
  <div class="prev no-active" v-else></div>
  <div class="back_pages">
  <div :href="'pages/' + n" class="page" :class="{'active': currentPage === n}" v-for="n in countPages" :key="'id_'+ n" @click="updatePageCurrent(n)">{{n}}</div>
  </div>
    <div :href="'pages/' + (currentPage + 1)" class="next" v-if="currentPage <= countPages - 1" @click="updatePageCurrent(currentPage + 1)"></div>
    <div class="next no-active" v-else></div>
  </div>
</template>

<script>
export default {
  computed: {
    countPages() {
      return this.$store.state.pages.count
      console.log(this.$store.state.pages.count)
    },
    currentPage() {
      return this.$store.state.pages.current
    }
  },
  methods: {
    updatePageCurrent (n) {
      console.log(n + '#')
      this.$store.commit('updatePageCurrent', n)
    }
  }
}
</script>

<style>
 .pages {
   display: flex;
   justify-content: center;
   margin: 37px 0px;
 }
 .back_pages {
   display: flex;
   width: auto;
   height: 40px;
   border-radius: 40px;
   margin: 0px 20px;
   background: #EDEDED;
 }
 .page {
   width: 40px;
   height: 40px;
   font-weight: normal;
font-size: 18px;
line-height: 40px;
text-align: center;
border-radius: 40px;
cursor: pointer;
 }
 .page.active {
 background: #6F64F8;
 color: white;
 }
 .prev {
   position: relative;
   width: 40px;
   height: 40px;
   border-radius: 40px;
   background: #EDEDED;
   cursor: pointer;
 }
 .prev.no-active {
   background: transparent;
 }
 .prev:before {
   content: '';
   display: block;
   position: absolute;
   width: 15px;
   height: 2px;
   left: 10px;
   top: 24px;
   background: black;
   transform: rotate(45deg)
 }
 .prev:after {
   content: '';
   display: block;
   position: absolute;
   width: 15px;
   height: 2px;
   left: 10px;
   top: 14px;
   background: black;
   transform: rotate(-45deg)
 }
 .next {
   position: relative;
   width: 40px;
   height: 40px;
   border-radius: 40px;
   background: #EDEDED;
   cursor: pointer;
 }
 .next.no-active {
   background: transparent;
 }
 .next:before {
   content: '';
   display: block;
   position: absolute;
   width: 15px;
   height: 2px;
   right: 10px;
   top: 14px;
   background: black;
   transform: rotate(45deg)
 }
 .next:after {
   content: '';
   display: block;
   position: absolute;
   width: 15px;
   height: 2px;
   right: 10px;
   top: 24px;
   background: black;
   transform: rotate(-45deg)
 }
</style>