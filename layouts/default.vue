<template>
  <div class="container">
    <Header />
    <nuxt />
    <Pages />
  </div>
</template>
<script>
  import Header from '~/components/Header.vue'
  import Pages from '~/components/Pages.vue'
  export default {
    components: {
      Header,
      Pages
    }
  }

</script>
<style>
  html {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    background: #F9F9F9;
  }
  .row {
    box-sizing: border-box;
  }

  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat;
    font-style: normal;
    color: #2C2C2C;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  @media (max-width: 1920px) {
    .container {
      max-width: 1600px;
    }
  }

</style>
