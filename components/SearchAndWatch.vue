<template>
  <div class="search_and_sort">
    <div class="search_results">
      <h5>{{countProd + ' results found'}}</h5>
      <div class="right_buttons">
        <div class="butt select">
          {{selected}}
          <div class="bode_select">
            <Select v-for="param in select" :key="param.name" :paramSelectProps="param" />
          </div>
          </div>
          <div class="butt button" v-on:click="cicle(currentView)"><img src="img/grid.svg" alt="tailes"></div>
          <div class="butt button" v-on:click="cicle(currentView)"><img src="img/list.svg" alt="list"></div>  
      </div>
    </div>
    <div class="search_input">
        <input type="text" v-modal="search" placeholdar="Search hear">
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
      cycle(currentView) {
        this.currentView = this.currentView === Tiles ? Tiles : List;
        this.$store.commit('currentView', currentView)
      },
    },
  }

</script>

<style>
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
 .bode_select {
   display: none;
   position: absolute;
   top: 50px;
   left: 0px;
   width: 141px;
   background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
 }
 .bode_select:before {
   content: '';
   display: block;
   position: absolute;
   width: 100%;
   height: 10px;
   top: -10px;
   left: 0px;
   background: transparent;
 }
 .select:hover .bode_select{
   display: block;
 }
 input {
   font-weight: 300;
font-size: 22px;
line-height: 26px;
color: #999999;
 }
 .search_input {
   height: 62px;
   background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
border-radius: 8px;
 }
</style>
