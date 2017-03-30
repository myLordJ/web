<template lang='pug'>
  .box__cell.is-unguttered(style="margin-bottom: -5px")
    a(v-for="c in currents", :href="c.linkUrl", target="_blank")
      img.slider-ad(
        :src="c.image.url",
        :alt="c.name",
        :title="c.name"
      )
    button.box__button.button.button--light.button--rounded(@click.prevent="nextPage", v-show="items && items.length")
      .icon.fa.fa-angle-right.fa-3x
</template>

<script>
  let interval

  export default {
    name: 'BigSlider',

    props: {
      items: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        default: 1
      },
      router: {
        type: String
      },
      moveSize: {
        type: Number,
        default: 1
      }
    },

    data() {
      return {
        currents: [],
        from: 0,
        to: 0
      }
    },

    mounted() {
      this.loadCurrents()
      this.setSliderInterval()
    },

    destroyed() {
      this.clearSliderInterval()
    },

    watch: {
      items() {
        this.loadCurrents()
      }
    },

    methods: {
      clearSliderInterval() {
        clearInterval(interval)
      },

      setSliderInterval() {
        interval = setInterval(() => { this.nextPage() }, 5000)
      },

      loadCurrents() {
        if (this.items) {
          this.to = parseInt(this.pageSize)
          this.currents = this.items.slice(this.from, this.to)
        }
      },

      nextPage() {
        if (this.items && this.items.length) {
          if (this.to >= this.items.length) {
            this.to = parseInt(this.pageSize)
            this.from = 0
          } else {
            this.from += this.moveSize
            this.to += this.moveSize
          }

          this.clearSliderInterval()
          this.setSliderInterval()

          this.currents = this.items.slice(this.from, this.to)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider-ad {
    height: 352px;
    width: 597px;
  }
</style>
