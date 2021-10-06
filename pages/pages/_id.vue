<template>
  <div class="row">
  <div class="col-sm-12 col-xl-3">
    <FilterProd/>
  </div>
  <div class="col-sm-12 col-xl-9">
    <SearchAndWatch />
    <Products :page="$route.params.id"/>
  </div>
  </div>
</template>

<script>
import FilterProd from '~/components/FilterProd.vue'
import SearchAndWatch from '~/components/SearchAndWatch.vue'
import Products from '~/components/Products.vue'
export default {
  components: {
    SearchAndWatch,
    Products,
    FilterProd,
  },
  middleware: 'api',
  props: ['page']
}
</script>

<style>
.row {
  margin-bottom: 37px;
}
</style>

