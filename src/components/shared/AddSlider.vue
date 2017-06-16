<template lang="pug">
  .box__cell.is-unguttered(style="margin-bottom: -5px")
    span(
      v-for="(c, i) in items",
      v-show="i >= from && i < to"
    )
      a(:href="c.linkUrl", target="_blank")
        transition(name="fade")
          img.slider-ad(
            :src="c.image.url",
            :alt="c.name",
            :title="c.name",
            v-show="i >= from && i < to"
          )
      button.box__button.button.button--light.button--rounded(@click.prevent="nextPage", v-show="items && items.length")
        .icon.fa.fa-angle-right.fa-3x
</template>

<script>
  let interval

  export default {
    name: 'AddSlider',

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
