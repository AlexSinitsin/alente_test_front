<template>
  <div class="products">
    <component :is="currentView" v-for="product in products" :key="product.id" :paramProdProps="product"></component>
  </div>
</template>

<script>
import List from '~/components/List.vue'
import Tails from '~/components/Tails.vue'

export default {
  components: {
    List,
    Tails
  },
  props: ['paramProdProps'],
  computed: {
    currentView() {
      return this.$store.state.view
    },
     products() {
       const currentPage = this.$store.state.pages.current
      return this.$store.state.filteredProducts
      .filter((param, i) => i >= (currentPage - 1) * 9 && i < (currentPage * 9))
    }
  }
}
</script>

<style>
  .products {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-flow: row wrap;
  }
</style>