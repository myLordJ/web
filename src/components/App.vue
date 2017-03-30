<template lang='pug'>
  main
    loader(v-show='showLoader')
    rac-header
    router-view
    rac-footer
</template>

<script>
  import Loader from 'components/shared/Loader'
  import RacHeader from 'components/layout/Header'
  import RacFooter from 'components/layout/Footer'

  import api from 'services/rac-api'

  export default {
    name: 'App',

    components: { Loader, RacHeader, RacFooter },

    data() {
      return {
        showLoader: false
      }
    },

    created() {
      api.on('trae-before', () => {
        this.showLoader = true
      })

      api.on('trae-finally', () => {
        this.showLoader = false
      })
    }
  }

</script>

<style lang='scss'>
  @import '../scss/main.scss';
</style>
