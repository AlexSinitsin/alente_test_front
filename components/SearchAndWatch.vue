<template>
  <div class="search_and_sort">
    <div class="search_results">
      <h5>{{countProd + ' results found'}}</h5>
      <div class="right_buttons">
        <div class="butt select">
          {{selected}}
          <div class="body_select">
            <Select v-for="param in select" :key="param.name" :paramSelectProps="param" />
          </div>
          </div>
          <div class="butt button" v-on:click="updateStyle('Tails')"><img src="img/grid.svg" alt="tailes"></div>
          <div class="butt button" v-on:click="updateStyle('List')"><img src="img/list.svg" alt="list"></div>  
      </div>
    </div>
    <div class="search_input">
        <input type="text" v-model="search" v-on:input="updateSearch(search)" placeholder="Search hear">
    </div>
  </div>
</template>

<script>
  import Select from '~/components/Select.vue'

  export default {
    data() {
      return {
        search: '',
      }
    },
    components: {
      Select
    },
    props: ['paramSelectPrors'],
    computed: {
      select() {
        return this.$store.state.select
      },
      selected() {
        return this.$store.state.select
        .filter(param => param.checked === 'checked')
        .map(param => param.name)[0]
         
      },
      countProd() {
        return this.$store.state.search.count
      },
    },
    methods: {
      updateStyle(style) {
        this.$store.commit('currentView', style)
      },
      updateSearch(search) {
        const n = search
        this.$store.commit('updateSearch', n)
      }
    },
  }

</script>

<style>
.search_and_sort {
  margin-bottom: 26px;
}
 .search_results {
   display: flex;
   justify-content: space-between;
 }
 .right_buttons {
   display: flex;
   justify-content: flex-end;
   position: relative;
   top: -20px;
 }
 .butt {
   margin-left: 13px;
 }
 .button {
   width: 40px;
   height: 40px;
   background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
padding: 7px 10px;
cursor: pointer;
 }
 .button:last-child {
   padding: 7px 13px;
 }
 .select {
   position: relative;
   width: 141px;
   height: 40px;
   background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
line-height: 20px;
padding-left: 20px;
padding-top: 12px;
cursor: pointer;
 }
 .select:before {
   content: '';
   display: block;
   position: absolute;
   width: 10px;
   height: 2px;
   right: 18px;
   top: 20px;
   background: #606060;
   transform: rotate(35deg)
 }
 .select:after {
   content: '';
   display: block;
   position: absolute;
   width: 10px;
   height: 2px;
   top: 20px;
   right: 10px;
   background: #606060;
   transform: rotate(-35deg)
 }
 .body_select {
   display: none;
   position: absolute;
   z-index: 1000;
   top: 50px;
   left: 0px;
   width: 141px;
   background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
 }
 .body_select:before {
   content: '';
   display: block;
   position: absolute;
   width: 100%;
   height: 10px;
   top: -10px;
   left: 0px;
   background: transparent;
 }
 .select:hover .body_select{
   display: block;
 }
 input {
   font-weight: 300;
   height: 62px;
   width: 100%;
   background: transparent;
   border: 0px;
font-size: 22px;
line-height: 26px;
color: #999999;
padding-left: 30px;
position: relative;
 }
 input:focus {
   outline: none;
 }
 .search_input {
   height: 62px;
   background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
position: relative;
 }
 .search_input:before {
   content: '';
   display: block;
   position: absolute;
   width: 30px;
   height: 30px;
   top: 20px;
   right: 25px;
   z-index: 1000;
   background: url("data:image/svg+xml,%3Csvg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2975 17C14.9283 17 18.6823 13.4183 18.6823 9C18.6823 4.58172 14.9283 1 10.2975 1C5.6668 1 1.91284 4.58172 1.91284 9C1.91284 13.4183 5.6668 17 10.2975 17Z' stroke='%23606060' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.7784 19L15.538 14' stroke='%23606060' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat;
 }
</style>
